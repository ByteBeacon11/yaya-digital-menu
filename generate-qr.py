import qrcode, sys
from PIL import Image, ImageDraw, ImageFont
import os

if len(sys.argv) > 1:
    url = sys.argv[1].strip()
else:
    url = input("Enter your live website URL: ").strip()
if not url.startswith("http"):
    url = "https://" + url

qr = qrcode.QRCode(box_size=12, border=4)
qr.add_data(url)
qr.make(fit=True)
qr_img = qr.make_image(fill_color="#3d2b1f", back_color="white").convert("RGB")

canvas_w, canvas_h = 1200, 1600
canvas = Image.new("RGB", (canvas_w, canvas_h), "#fffaf0")
draw = ImageDraw.Draw(canvas)

try:
    font_large = ImageFont.truetype("segoeui.ttf", 64)
    font_med = ImageFont.truetype("segoeui.ttf", 36)
    font_small = ImageFont.truetype("segoeui.ttf", 28)
except:
    font_large = ImageFont.load_default()
    font_med = ImageFont.load_default()
    font_small = ImageFont.load_default()

title = "Yaya's House"
subtitle = "Savor the Flavor, Feel the Love"
location = "Addis Ababa, Bole-Atlas  |  +251 911 123 00321"
email = "yayashouse@gmail.com"
instruction = "Scan me to view our menu"

t_bbox = draw.textbbox((0, 0), title, font=font_large)
draw.text(((canvas_w - t_bbox[2]) // 2, 60), title, fill="#3d2b1f", font=font_large)

s_bbox = draw.textbbox((0, 0), subtitle, font=font_med)
draw.text(((canvas_w - s_bbox[2]) // 2, 140), subtitle, fill="#6b5a4a", font=font_med)

qr_x = (canvas_w - qr_img.width) // 2
qr_y = 220
canvas.paste(qr_img, (qr_x, qr_y))

i_bbox = draw.textbbox((0, 0), instruction, font=font_med)
draw.text(((canvas_w - i_bbox[2]) // 2, qr_y + qr_img.height + 30), instruction, fill="#3d2b1f", font=font_med)

l_bbox = draw.textbbox((0, 0), location, font=font_small)
draw.text(((canvas_w - l_bbox[2]) // 2, qr_y + qr_img.height + 90), location, fill="#8a7a6a", font=font_small)

e_bbox = draw.textbbox((0, 0), email, font=font_small)
draw.text(((canvas_w - e_bbox[2]) // 2, qr_y + qr_img.height + 130), email, fill="#8a7a6a", font=font_small)

url_display = f"URL: {url}"
u_bbox = draw.textbbox((0, 0), url_display, font=font_small)
draw.text(((canvas_w - u_bbox[2]) // 2, qr_y + qr_img.height + 180), url_display, fill="#a0806a", font=font_small)

output = os.path.join(os.path.dirname(__file__), "images", "qr-code-print.png")
canvas.save(output, dpi=(300, 300))
print(f"QR code saved to: {output}")
print("Open and print this image for your customers!")
