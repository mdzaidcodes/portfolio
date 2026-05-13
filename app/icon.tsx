import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Tab icon — matches navbar “MZ” (blue → cyan) */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 15,
            fontWeight: 800,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#60a5fa" }}>M</span>
          <span style={{ color: "#22d3ee" }}>Z</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
