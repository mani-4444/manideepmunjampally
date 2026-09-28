import { ImageResponse } from "next/og";

/**
 * Social preview card.
 *
 * Without this, pasting the portfolio into Slack or a referral email renders
 * as a bare URL — which reads as unfinished at exactly the moment a recruiter
 * is forwarding it to a hiring manager.
 *
 * Satori (which backs ImageResponse) supports a subset of CSS: flexbox only,
 * no grid, and every multi-child node needs an explicit display:flex.
 *
 * Deliberately uses the bundled default face rather than loading Akira. A
 * font-parse failure would happen inside ImageResponse — past any try/catch
 * around the file read — and would break the route rather than degrade. The
 * black-and-amber identity carries the card without it.
 */

export const alt =
  "Manideep Munjampally — full-stack developer building generative-AI systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#000000";
const BONE = "#EDE9E0";
const BONE_DIM = "#A8A49C";
const BONE_MUTE = "#6E6A63";
const SIGNAL = "#FFC800";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          padding: "72px 80px",
        }}
      >
        {/* Availability — the first thing a recruiter filters on */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: `1px solid ${SIGNAL}`,
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: SIGNAL,
                marginRight: 12,
              }}
            />
            <div style={{ display: "flex", color: SIGNAL, fontSize: 21, letterSpacing: 2 }}>
              GRADUATING 2028 · OPEN TO INTERNSHIPS
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              color: BONE,
              letterSpacing: -3,
            }}
          >
            <div style={{ display: "flex" }}>Manideep</div>
            <div style={{ display: "flex" }}>Munjampally</div>
          </div>

          <div style={{ display: "flex", color: BONE_DIM, fontSize: 30, marginTop: 28 }}>
            Full-stack developer building generative-AI systems
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, backgroundColor: SIGNAL, width: 180 }} />
          <div
            style={{
              display: "flex",
              color: BONE_MUTE,
              fontSize: 23,
              marginTop: 22,
              letterSpacing: 1,
            }}
          >
            CBIT Hyderabad · 9.74 CGPA · #93 of 3,062 at HackerRank Orchestrate
          </div>
        </div>
      </div>
    ),
    size
  );
}
