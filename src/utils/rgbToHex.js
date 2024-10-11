function rgbToHex(rgb) {
    let [r, g, b] = rgb.split(", ").map((s) => parseInt(s.trim()));

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    const hex = ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();

    return `#${hex}`;
}

export default rgbToHex;