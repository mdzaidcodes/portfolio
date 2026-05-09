"""Export first page of each PDF in public/certificates to public/certificates/previews/<name>.png"""
import os
import fitz  # PyMuPDF

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "certificates")
OUT = os.path.join(ROOT, "previews")
os.makedirs(OUT, exist_ok=True)

ZOOM = 2  # scale for sharper PNGs

for name in os.listdir(ROOT):
    if not name.lower().endswith(".pdf"):
        continue
    pdf_path = os.path.join(ROOT, name)
    stem = os.path.splitext(name)[0]
    out_path = os.path.join(OUT, stem + ".png")
    doc = fitz.open(pdf_path)
    try:
        page = doc[0]
        mat = fitz.Matrix(ZOOM, ZOOM)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(out_path)
        print("OK", name, "->", os.path.relpath(out_path, ROOT))
    finally:
        doc.close()

print("Done.")
