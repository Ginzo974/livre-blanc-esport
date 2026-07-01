import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Du logo à la scène — Livre Blanc · Identité visuelle esport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [russo, chakra, chakraSemi] = await Promise.all([
    readFile(join(process.cwd(), "assets/RussoOne-Regular.ttf")),
    readFile(join(process.cwd(), "assets/ChakraPetch-Regular.ttf")),
    readFile(join(process.cwd(), "assets/ChakraPetch-SemiBold.ttf")),
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
          fontFamily: "Chakra Petch",
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
          <div style={{ width: "60px", height: "2px", background: "#d11f27" }} />
          <div>LIVRE BLANC</div>
        </div>

        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div
            style={{
              fontFamily: "Russo One",
              fontSize: "100px",
              lineHeight: 1.02,
              color: "#f4f1ea",
              display: "flex",
            }}
          >
            DU LOGO
          </div>
          <div
            style={{
              fontFamily: "Russo One",
              fontSize: "100px",
              lineHeight: 1.02,
              color: "#e0242d",
              display: "flex",
            }}
          >
            À LA SCÈNE.
          </div>
          <div
            style={{
              marginTop: "34px",
              fontSize: "28px",
              color: "#b5b5b5",
              maxWidth: "820px",
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
            letterSpacing: "3px",
            color: "#8a8a8a",
            fontWeight: 600,
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
            fontFamily: "Russo One",
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
        { name: "Russo One", data: russo, style: "normal", weight: 400 },
        { name: "Chakra Petch", data: chakra, style: "normal", weight: 400 },
        { name: "Chakra Petch", data: chakraSemi, style: "normal", weight: 600 },
      ],
    }
  );
}
