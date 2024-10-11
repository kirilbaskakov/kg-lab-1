function cmykToRgb(cmyk) {
    const [c, m, y, k] = cmyk.replace(/%/g, "").split(", ").map((s) => parseInt(s.trim()));
    const C = c / 100;  
    const M = m / 100;
    const Y = y / 100;
    const K = k / 100;

    const r = 255 * (1 - C) * (1 - K);
    const g = 255 * (1 - M) * (1 - K);
    const b = 255 * (1 - Y) * (1 - K);

    return [r, g, b].map(col => col.toFixed(0)).join(", ");
}

export default cmykToRgb;