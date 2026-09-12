'use client'

import { Suspense, lazy, useRef, useEffect, useCallback } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Intercept wheel events in capture phase so Spline's internal canvas listeners
    // cannot capture wheel events or call preventDefault(), allowing butter-smooth page scrolling
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', handleWheel, { capture: true, passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, []);

  const handleSplineLoad = useCallback((splineApp: unknown) => {
    try {
      const app = splineApp as {
        _controls?: { enableZoom?: boolean; enablePan?: boolean; onMouseWheel?: (e: Event) => void };
        canvas?: HTMLCanvasElement;
      };
      if (app?._controls) {
        app._controls.enableZoom = false;
        app._controls.enablePan = false;
      }
      if (app?.canvas) {
        app.canvas.style.touchAction = 'pan-y';
        if (app._controls?.onMouseWheel) {
          app.canvas.removeEventListener('wheel', app._controls.onMouseWheel);
        }
      }
    } catch {
      // Graceful fallback if internal structure changes
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className || ''}`}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
      </Suspense>
    </div>
  )
}
