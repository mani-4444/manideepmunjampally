'use client'

import { Suspense, lazy, useRef, useEffect, useCallback, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'stalled'>('loading')

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Intercept wheel events in capture phase so Spline's internal canvas listeners
    // cannot capture wheel events or call preventDefault(), allowing butter-smooth page scrolling
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation()
    }

    el.addEventListener('wheel', handleWheel, { capture: true, passive: true })

    return () => {
      el.removeEventListener('wheel', handleWheel, { capture: true })
    }
  }, [])

  // A WebGL scene can fail quietly — blocked context, slow network, no GPU.
  // Without this the panel just sits there as an empty bordered box.
  useEffect(() => {
    if (status !== 'loading') return
    const timer = window.setTimeout(() => {
      setStatus((s) => (s === 'loading' ? 'stalled' : s))
    }, 14000)
    return () => window.clearTimeout(timer)
  }, [status])

  const handleSplineLoad = useCallback((splineApp: unknown) => {
    setStatus('ready')
    try {
      const app = splineApp as {
        _controls?: { enableZoom?: boolean; enablePan?: boolean; onMouseWheel?: (e: Event) => void };
        canvas?: HTMLCanvasElement;
      }
      if (app?._controls) {
        app._controls.enableZoom = false
        app._controls.enablePan = false
      }
      if (app?.canvas) {
        app.canvas.style.touchAction = 'pan-y'
        if (app._controls?.onMouseWheel) {
          app.canvas.removeEventListener('wheel', app._controls.onMouseWheel)
        }
      }
    } catch {
      // Graceful fallback if internal structure changes
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className || ''}`}>
      {status !== 'ready' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink">
          {status === 'loading' ? (
            <span className="loader" role="status" aria-label="Loading 3D scene" />
          ) : (
            <span className="field-key px-6 text-center !text-[10px] leading-relaxed">
              3D scene unavailable
            </span>
          )}
        </div>
      )}

      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <span className="loader" role="status" aria-label="Loading 3D scene" />
          </div>
        }
      >
        <Spline scene={scene} className="w-full h-full" onLoad={handleSplineLoad} />
      </Suspense>
    </div>
  )
}
