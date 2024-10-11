function hlsToRgb(hls) {
    let [h, l, s] = hls.split(",").map((s) => parseInt(s.trim()));
    s /= 100; 
    l /= 100; 

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(h / 60 % 2 - 1));
    let m = l - c / 2;
    let r, g, b;

    if (h < 60) {
        [r, g, b] = [c, x, 0]; 
    } else if (h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h < 300) {
        [r, g, b] = [x, 0, c];
    } else {
        [r, g, b] = [c, 0, x];
    }

    return [r, g, b].map(num => Math.round((num + m) * 255)).join(", ");
}

export default hlsToRgb;