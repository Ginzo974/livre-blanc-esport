import { ImageResponse } from "next/og";

export const alt = "Du logo à la scène — Livre Blanc · Identité visuelle esport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,54,167,0.4) 0%, transparent 70%), #0a0a0a",
          color: "#f4f1ea",
          position: "relative",
        }}
      >
        {/* Top kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "20px",
            letterSpacing: "8px",
            color: "#8a8a8a",
            fontWeight: 600,
          }}
        >
          <div style={{ width: "60px", height: "2px", background: "#4d8eff" }} />
          <div>LIVRE BLANC</div>
        </div>

        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: "118px",
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#f4f1ea",
              fontWeight: 800,
              display: "flex",
            }}
          >
            DU LOGO
          </div>
          <div
            style={{
              fontSize: "118px",
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#4d8eff",
              fontWeight: 800,
              display: "flex",
            }}
          >
            À LA SCÈNE.
          </div>
          <div
            style={{
              marginTop: "30px",
              fontSize: "28px",
              color: "#b5b5b5",
              maxWidth: "880px",
              letterSpacing: "0.5px",
              fontWeight: 400,
              display: "flex",
            }}
          >
            Décrypter et concevoir l&apos;identité visuelle d&apos;une équipe esport.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            letterSpacing: "4px",
            color: "#8a8a8a",
            fontWeight: 600,
          }}
        >
          <div>6 CAS D&apos;ÉTUDE · 1 MÉTHODE · HUNTERS</div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "12px", height: "12px", background: "#c81d25" }} />
            <div style={{ color: "#f4f1ea" }}>du-logo-a-la-scene</div>
          </div>
        </div>

        {/* Decorative right K */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            fontSize: "420px",
            color: "#0036a7",
            opacity: 0.18,
            lineHeight: 0.8,
            fontWeight: 900,
          }}
        >
          K
        </div>
      </div>
    ),
    { ...size }
  );
}
