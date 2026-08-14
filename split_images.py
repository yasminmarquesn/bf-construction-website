from PIL import Image
import os

def split_vertical(image_path, output_before, output_after):
    img = Image.open(image_path)
    w, h = img.size
    # Split in the middle vertically (top/bottom)
    # The collages have a divider in the middle
    # For bathroom-before-after-2.png, the divider is roughly at the middle
    before = img.crop((0, 0, w, h // 2 - 20)).convert('RGB')
    after = img.crop((0, h // 2 + 20, w, h)).convert('RGB')
    before.save(output_before)
    after.save(output_after)
    print(f"Split {image_path} into {output_before} and {output_after}")

os.makedirs('/tmp/bf-construction-website/public/assets/projects/transform', exist_ok=True)

# Bathroom
split_vertical(
    '/tmp/bf-construction-website/public/assets/projects/new/bathroom-before-after-2.png',
    '/tmp/bf-construction-website/public/assets/projects/transform/bathroom-before.jpg',
    '/tmp/bf-construction-website/public/assets/projects/transform/bathroom-after.jpg'
)

# Renovation
split_vertical(
    '/tmp/bf-construction-website/public/assets/projects/new/renovation-before-after-1.png',
    '/tmp/bf-construction-website/public/assets/projects/transform/renovation-before.jpg',
    '/tmp/bf-construction-website/public/assets/projects/transform/renovation-after.jpg'
)
