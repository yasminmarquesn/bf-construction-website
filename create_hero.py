from PIL import Image
import os

def create_hero_split():
    # Paths to the luxury images
    bathroom_path = '/tmp/bf-construction-website/public/bathroom-project-2.jpg'
    kitchen_path = '/tmp/bf-construction-website/public/kitchen-project-2.jpg'
    output_path = '/tmp/bf-construction-website/public/assets/hero-luxury-split.jpg'
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Open images
    bath = Image.open(bathroom_path)
    kitch = Image.open(kitchen_path)
    
    # Define target size for hero (e.g., 1920x1080)
    target_width = 1920
    target_height = 1080
    half_width = target_width // 2
    
    # Resize and crop bathroom (left half)
    bath_ratio = bath.width / bath.height
    target_ratio = half_width / target_height
    
    if bath_ratio > target_ratio:
        # Image is wider than target
        new_width = int(target_height * bath_ratio)
        bath_resized = bath.resize((new_width, target_height), Image.Resampling.LANCZOS)
        left = (new_width - half_width) // 2
        bath_cropped = bath_resized.crop((left, 0, left + half_width, target_height))
    else:
        # Image is taller than target
        new_height = int(half_width / bath_ratio)
        bath_resized = bath.resize((half_width, new_height), Image.Resampling.LANCZOS)
        top = (new_height - target_height) // 2
        bath_cropped = bath_resized.crop((0, top, half_width, top + target_height))
        
    # Resize and crop kitchen (right half)
    kitch_ratio = kitch.width / kitch.height
    if kitch_ratio > target_ratio:
        new_width = int(target_height * kitch_ratio)
        kitch_resized = kitch.resize((new_width, target_height), Image.Resampling.LANCZOS)
        left = (new_width - half_width) // 2
        kitch_cropped = kitch_resized.crop((left, 0, left + half_width, target_height))
    else:
        new_height = int(half_width / kitch_ratio)
        kitch_resized = kitch.resize((half_width, new_height), Image.Resampling.LANCZOS)
        top = (new_height - target_height) // 2
        kitch_cropped = kitch_resized.crop((0, top, half_width, top + target_height))
        
    # Create new image
    hero = Image.new('RGB', (target_width, target_height))
    hero.paste(bath_cropped, (0, 0))
    hero.paste(kitch_cropped, (half_width, 0))
    
    # Save
    hero.save(output_path, 'JPEG', quality=90)
    print(f"Hero image created at {output_path}")

if __name__ == "__main__":
    create_hero_split()
