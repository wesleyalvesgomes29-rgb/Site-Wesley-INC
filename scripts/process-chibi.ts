import sharp from 'sharp';

async function perfectCutout() {
  const image = sharp('public/images/wesley/wesley-chibi.jpg');
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // 1. Identify connected background starting from all image borders
  const isBg = new Uint8Array(width * height);
  const queue = new Int32Array(width * height * 2);
  let qHead = 0;
  let qTail = 0;

  const inQueue = new Uint8Array(width * height);

  function getPixel(x: number, y: number) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  // Push border pixels
  for (let x = 0; x < width; x++) {
    queue[qTail++] = x; queue[qTail++] = 0;
    inQueue[x] = 1;
    const btmIdx = (height - 1) * width + x;
    queue[qTail++] = x; queue[qTail++] = height - 1;
    inQueue[btmIdx] = 1;
  }
  for (let y = 0; y < height; y++) {
    const leftIdx = y * width;
    if (!inQueue[leftIdx]) {
      queue[qTail++] = 0; queue[qTail++] = y;
      inQueue[leftIdx] = 1;
    }
    const rightIdx = y * width + (width - 1);
    if (!inQueue[rightIdx]) {
      queue[qTail++] = width - 1; queue[qTail++] = y;
      inQueue[rightIdx] = 1;
    }
  }

  // A pixel belongs to the background if it is connected to the edge and is white/light
  while (qHead < qTail) {
    const x = queue[qHead++];
    const y = queue[qHead++];
    const idx = y * width + x;
    const [r, g, b] = getPixel(x, y);

    // Light background check
    // Pure white or very light off-white (luminance > 225 or near white)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const diff = maxVal - minVal;

    // Check if background
    const isLight = brightness > 230 || (minVal > 215 && diff < 30) || (minVal > 190 && diff < 15);

    if (isLight) {
      isBg[idx] = 1;

      // 4-way / 8-way neighbors
      const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
      const dy = [0, 0, -1, 1, -1, -1, 1, 1];
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nIdx = ny * width + nx;
          if (!inQueue[nIdx]) {
            inQueue[nIdx] = 1;
            const [nr, ng, nb] = getPixel(nx, ny);
            const nBrightness = (nr * 299 + ng * 587 + nb * 114) / 1000;
            const nMin = Math.min(nr, ng, nb);
            const nMax = Math.max(nr, ng, nb);
            const nDiff = nMax - nMin;

            if (nBrightness > 225 || (nMin > 210 && nDiff < 35) || (nMin > 185 && nDiff < 20)) {
              queue[qTail++] = nx;
              queue[qTail++] = ny;
            }
          }
        }
      }
    }
  }

  // Create RGBA image with smooth alpha matte
  const outBuffer = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const srcIdx = idx * channels;
      const dstIdx = idx * 4;

      let r = data[srcIdx];
      let g = data[srcIdx + 1];
      let b = data[srcIdx + 2];

      if (isBg[idx] === 1) {
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        if (brightness >= 248) {
          // Fully transparent outside
          outBuffer[dstIdx] = 0;
          outBuffer[dstIdx + 1] = 0;
          outBuffer[dstIdx + 2] = 0;
          outBuffer[dstIdx + 3] = 0;
        } else {
          // Soft edge blending
          const alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * 4)));
          outBuffer[dstIdx] = r;
          outBuffer[dstIdx + 1] = g;
          outBuffer[dstIdx + 2] = b;
          outBuffer[dstIdx + 3] = alpha;
        }
      } else {
        // Foreground - Check if adjacent to background to de-fringe any white matte bleeding
        let hasBgNeighbor = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx] === 1) {
                hasBgNeighbor = true;
                break;
              }
            }
          }
          if (hasBgNeighbor) break;
        }

        if (hasBgNeighbor) {
          // If the pixel is very bright white near the outer border of hair/shoulder, defringe slightly
          const minVal = Math.min(r, g, b);
          if (minVal > 240) {
            // Soft blend
            outBuffer[dstIdx] = r;
            outBuffer[dstIdx + 1] = g;
            outBuffer[dstIdx + 2] = b;
            outBuffer[dstIdx + 3] = 250;
          } else {
            outBuffer[dstIdx] = r;
            outBuffer[dstIdx + 1] = g;
            outBuffer[dstIdx + 2] = b;
            outBuffer[dstIdx + 3] = 255;
          }
        } else {
          outBuffer[dstIdx] = r;
          outBuffer[dstIdx + 1] = g;
          outBuffer[dstIdx + 2] = b;
          outBuffer[dstIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile('public/images/wesley/wesley-chibi.png');

  console.log('High-precision transparent PNG generated at public/images/wesley/wesley-chibi.png');
}

perfectCutout().catch(console.error);
