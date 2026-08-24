import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Du logo à la scène — Livre Blanc · Identité visuelle esport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [clash, satoshi, satoshiBold, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/ClashDisplay-Semibold.ttf")),
    readFile(join(process.cwd(), "assets/Satoshi-Regular.ttf")),
    readFile(join(process.cwd(), "assets/Satoshi-Bold.ttf")),
    readFile(join(process.cwd(), "assets/SpaceMono-Regular.ttf")),
  ]);

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
            "radial-gradient(ellipse 60% 55% at 28% 50%, rgba(200,29,37,0.34) 0%, transparent 70%), #0a0a0a",
          color: "#f4f1ea",
          position: "relative",
          fontFamily: "Satoshi",
        }}
      >
        {/* Top kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            fontFamily: "Space Mono",
            fontSize: "19px",
            letterSpacing: "6px",
            color: "#8f8980",
          }}
        >
          <div style={{ width: "56px", height: "2px", background: "#d11f27" }} />
          <div>LIVRE BLANC</div>
        </div>

        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              fontFamily: "Clash Display",
              fontWeight: 600,
              fontSize: "92px",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              color: "#f4f1ea",
              display: "flex",
            }}
          >
            DU LOGO
          </div>
          <div
            style={{
              fontFamily: "Clash Display",
              fontWeight: 600,
              fontSize: "92px",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              color: "#e0242d",
              display: "flex",
            }}
          >
            À LA SCÈNE.
          </div>
          <div
            style={{
              marginTop: "34px",
              fontFamily: "Satoshi",
              fontSize: "29px",
              lineHeight: 1.35,
              color: "#b5b5b5",
              maxWidth: "820px",
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
            fontFamily: "Space Mono",
            fontSize: "16px",
            letterSpacing: "2px",
            color: "#8f8980",
          }}
        >
          <div>6 CAS D&apos;ÉTUDE · 1 MÉTHODE · HUNTERS</div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "12px", height: "12px", background: "#d11f27" }} />
            <div style={{ color: "#f4f1ea" }}>du-logo-a-la-scene.vercel.app</div>
          </div>
        </div>

        {/* Decorative right K */}
        <div
          style={{
            position: "absolute",
            right: "70px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            fontFamily: "Clash Display",
            fontWeight: 600,
            fontSize: "440px",
            color: "#c81d25",
            opacity: 0.15,
            lineHeight: 0.8,
          }}
        >
          K
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Clash Display", data: clash, style: "normal", weight: 600 },
        { name: "Satoshi", data: satoshi, style: "normal", weight: 400 },
        { name: "Satoshi", data: satoshiBold, style: "normal", weight: 700 },
        { name: "Space Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
