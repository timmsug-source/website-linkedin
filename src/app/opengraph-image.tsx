import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Timm Schurig – Webdesign, SEO & Automatisierung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            background: "#00bc7d",
            borderRadius: "3px",
            marginBottom: "40px",
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: "1.1",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Webdesign, SEO &{" "}
          <span style={{ color: "#00bc7d" }}>Automatisierung</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginBottom: "60px",
            maxWidth: "800px",
            lineHeight: "1.4",
          }}
        >
          Moderne Websites & digitale Systeme – schnell, lokal, zukunftssicher.
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#00bc7d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "900",
              color: "#ffffff",
            }}
          >
            TS
          </div>
          <div style={{ fontSize: "24px", color: "#e2e8f0", fontWeight: "600" }}>
            timmschurig.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
