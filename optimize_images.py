import os
from PIL import Image

def optimize_image(file_path, max_size=(1920, 1920), quality=85):
    try:
        with Image.open(file_path) as img:
            original_size = os.path.getsize(file_path)
            
            # Convert to RGB if necessary (for JPEG saving)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Resize if too large
            if img.width > max_size[0] or img.height > max_size[1]:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Determine extension
            ext = os.path.splitext(file_path)[1].lower()
            
            # Save optimized version
            if ext in ['.jpg', '.jpeg']:
                img.save(file_path, "JPEG", quality=quality, optimize=True)
            elif ext == '.png':
                # For very large PNGs, consider saving as JPEG if transparency isn't needed
                # But to be safe, just compress the PNG
                img.save(file_path, "PNG", optimize=True)
            
            new_size = os.path.getsize(file_path)
            print(f"Optimized {file_path}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB")
    except Exception as e:
        print(f"Error optimizing {file_path}: {e}")

def main():
    public_dir = "/tmp/bf-construction-website/public"
    for root, dirs, files in os.walk(public_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                file_path = os.path.join(root, file)
                optimize_image(file_path)

if __name__ == "__main__":
    main()
