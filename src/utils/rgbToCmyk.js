function rgbToCmyk(rgb) {
    const  [r, g, b] = rgb.split(', ').map(s => parseInt(s.trim()));
    const R = r / 255;
    const G = g / 255;
    const B = b / 255;

    const K = 1 - Math.max(R, G, B);

    if (K === 1) {
        return [0, 0, 0, 1].map(col => `${(col * 100).toFixed(0)}%`).join(", ");
    }

    const C = (1 - R - K) / (1 - K);
    const M = (1 - G - K) / (1 - K);
    const Y = (1 - B - K) / (1 - K);

    return [C, M, Y, K].map(col => `${(col * 100).toFixed(0)}%`).join(", ");
}

export default rgbToCmyk;