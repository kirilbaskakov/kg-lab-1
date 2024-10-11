function rgbToHls(rgb) {
    let [r, g, b] = rgb.split(', ');
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    const d = max - min;

    if (d === 0) {
        h = s = 0; 
    } else {
        s = d / (1 - Math.abs(2 * l- 1));

        switch (max) {
            case r: 
                h = ((g - b) / d + 6) % 6;
                break;
            case g: 
                h = (b - r) / d + 2;
                break;
            case b: 
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }

    return `${h.toFixed(0)}°, ${(l * 100).toFixed(0)}%, ${(s * 100).toFixed(0)}%`;
}

export default rgbToHls;
