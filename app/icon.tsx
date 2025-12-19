import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: "#171717", // Your portfolio background color
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00f0ff",     // Your Cyan accent color
          borderRadius: "4px",  // Slightly rounded corners
          fontFamily: "monospace",
          fontWeight: 900,
        }}
      >
        {/* The Icon: A simple terminal prompt */}
        &gt;_
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
