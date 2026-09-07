import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          color: "#f2f2ee",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 4,
            color: "#96968f",
          }}
        >
          <span>{site.initials}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.15,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#96968f" }}>
            {site.role}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 4,
            backgroundColor: "#d6ff3f",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}