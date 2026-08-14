import os
from PIL import Image

def convert_png_to_jpg(file_path):
    if not file_path.lower().endswith('.png'):
        return
    
    try:
        with Image.open(file_path) as img:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            new_path = os.path.splitext(file_path)[0] + ".jpg"
            img.save(new_path, "JPEG", quality=85, optimize=True)
            
            # Remove original PNG
            os.remove(file_path)
            print(f"Converted {file_path} to {new_path}")
            return new_path
    except Exception as e:
        print(f"Error converting {file_path}: {e}")
        return None

def main():
    public_dir = "/tmp/bf-construction-website/public"
    # Target specific large files first
    targets = [
        "/tmp/bf-construction-website/public/assets/projects/bathroom/correct-before-after/bathroom-before.png",
        "/tmp/bf-construction-website/public/assets/projects/bathroom/correct-before-after/bathroom-after.png",
        "/tmp/bf-construction-website/public/assets/projects/bathroom/marble-suite/marble-bathroom-3.png",
        "/tmp/bf-construction-website/public/assets/projects/new/renovation-before-after-1.png",
        "/tmp/bf-construction-website/public/assets/projects/new/carpentry-new-1.png",
        "/tmp/bf-construction-website/public/assets/projects/laundry/clapham-laundry-3.png",
        "/tmp/bf-construction-website/public/assets/projects/new/bathroom-before-after-2.png"
    ]
    
    for target in targets:
        if os.path.exists(target):
            convert_png_to_jpg(target)

if __name__ == "__main__":
    main()
