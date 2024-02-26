function roomPainting(input) {
    let paintQuantity = Number(input[0]);
    let wallpaperQuantity = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintPrice = 21.50
    let totalPaintPrice = paintPrice * paintQuantity;
    let wallpaperPrice = 5.20;
    let totalWallpaperPrice = wallpaperPrice * wallpaperQuantity;
    let glovesNeeded = Math.ceil(wallpaperQuantity * 0.35);
    let totalGlovesPrice = glovesNeeded * glovesPrice;
    let brushNeeded = Math.floor(paintQuantity * 0.48);
    let totalBrushPrice = brushNeeded * brushPrice;

    let totalSum = totalPaintPrice + totalWallpaperPrice + totalGlovesPrice + totalBrushPrice;
    let delivery = totalSum / 15;
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)

}