const fs = require('fs');

function luminance(r, g, b) {
    let a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(r1, g1, b1, r2, g2, b2) {
    let lum1 = luminance(r1, g1, b1);
    let lum2 = luminance(r2, g2, b2);
    let brightest = Math.max(lum1, lum2);
    let darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

let primary = '#019f9e';
let textDark = '#222420';
let textLight = '#555555';
let bg = '#f9f1e1';
let white = '#ffffff';
let calloutBg = '#e3b819';
let coralAccent = '#a16356';

let results = [];

function check(name, hex1, hex2) {
    let c1 = hexToRgb(hex1);
    let c2 = hexToRgb(hex2);
    let ratio = contrast(c1[0], c1[1], c1[2], c2[0], c2[1], c2[2]).toFixed(2);
    results.push({ name: name, hex1: hex1, hex2: hex2, ratio: ratio });
}

check('Text Dark on Cream BG', textDark, bg);
check('Text Light on Cream BG', textLight, bg);
check('Primary Button (White on Teal Primary)', white, primary);
check('Teal Accent Text on Cream BG', primary, bg);
check('Coral Accent Text on Cream BG', coralAccent, bg);
check('Coral Button (White on Yellow Callout BG)', white, calloutBg);
check('Navbar Links (Text Light on White)', textLight, white);
check('Navbar Hover (Text Dark on White)', textDark, white);
check('Pill Text (White on Teal Primary)', white, primary);

fs.writeFileSync('contrast_output.json', JSON.stringify(results, null, 2), 'utf8');
