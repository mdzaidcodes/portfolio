"""Write app/favicon.ico (MZ on slate) for browser tabs. Requires Pillow."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "app" / "favicon.ico"

FONT_CANDIDATES = [
    Path(r"C:\Windows\Fonts\segoeuib.ttf"),
    Path(r"C:\Windows\Fonts\segoeui.ttf"),
    Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    Path("/System/Library/Fonts/SFNS.ttf"),
]


def load_font(size_px: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in FONT_CANDIDATES:
        if path.is_file():
            return ImageFont.truetype(str(path), size_px)
    return ImageFont.load_default()


def make_icon(px: int) -> Image.Image:
    img = Image.new("RGBA", (px, px), (2, 6, 23, 255))
    draw = ImageDraw.Draw(img)
    font_size = max(8, int(px * 0.48))
    font = load_font(font_size)
    m, z = "M", "Z"
    bbox_m = draw.textbbox((0, 0), m, font=font)
    bbox_z = draw.textbbox((0, 0), z, font=font)
    w_m = bbox_m[2] - bbox_m[0]
    w_z = bbox_z[2] - bbox_z[0]
    total_w = w_m + w_z
    h_m = bbox_m[3] - bbox_m[1]
    x0 = (px - total_w) // 2 - bbox_m[0]
    y0 = (px - h_m) // 2 - bbox_m[1]
    draw.text((x0, y0), m, font=font, fill=(96, 165, 250, 255))
    draw.text((x0 + w_m, y0), z, font=font, fill=(34, 211, 238, 255))
    return img


def main() -> None:
    i16, i32 = make_icon(16), make_icon(32)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    i16.save(OUT, format="ICO", append_images=[i32], sizes=[(16, 16), (32, 32)])
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
