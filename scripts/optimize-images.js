#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const optimizedDir = path.join(process.cwd(), 'public', '.optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image formats to optimize
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImages() {
  try {
    const files = fs.readdirSync(publicDir);
    let optimizedCount = 0;

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!imageExtensions.includes(ext)) continue;

      const filePath = path.join(publicDir, file);
      const stat = fs.statSync(filePath);

      // Skip if it's a directory
      if (stat.isDirectory()) continue;

      const optimizedPath = path.join(publicDir, file);
      const originalSize = stat.size;

      try {
        // Optimize the image
        await sharp(filePath)
          .resize(1920, 1080, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .toFormat('webp', { quality: 80 })
          .toFile(optimizedPath.replace(/\.\w+$/, '.webp'));

        const optimizedStat = fs.statSync(optimizedPath.replace(/\.\w+$/, '.webp'));
        const savedPercent = ((1 - optimizedStat.size / originalSize) * 100).toFixed(1);
        
        console.log(`✓ Optimized ${file} (${savedPercent}% reduction)`);
        optimizedCount++;
      } catch (err) {
        console.error(`✗ Failed to optimize ${file}:`, err.message);
      }
    }

    console.log(`\n✓ Image optimization complete: ${optimizedCount} images processed`);
  } catch (err) {
    console.error('Image optimization failed:', err);
    process.exit(1);
  }
}

optimizeImages();
