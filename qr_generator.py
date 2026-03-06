import qrcode


# Data to encode
data = "https://javy-scratchspace.github.io/javy0119_portfolio.io/"
# data = "https://docs.google.com/forms/d/e/1FAIpQLSdK_ws9xDJZ0xMY1EZmGHOjqLOwfCISUlM25Q5ZtGs-ysaGYg/viewform?usp=dialog"
# data = "https://docs.google.com/forms/d/e/1FAIpQLSfeStGyBQhb8gy1TgGFZXIXBIhJjWHej_AbQpd2pEVyp9g6nQ/viewform?usp=header"
# data = "https://forms.gle/T9BafCG3X5s96iNr7"
# data = "https://docs.google.com/forms/d/e/1FAIpQLSfEEtkknZluG2B0uhsGJKChme2k8YTzCytiDKGTDGkEGjfI6w/viewform?usp=dialog"

# Generate QR code
qr = qrcode.QRCode(
    version=1,  # controls size of QR
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=2,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image
img = qr.make_image(fill_color="black", back_color="white")

# Save to a file
# img.save("JACC_website_qr.png")
img.save("JACC_website_qr.png")