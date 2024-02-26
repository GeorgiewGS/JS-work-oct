function christmasGifts(input) {
    let command = input.shift();
    let adultsCount = 0;
    let kidsCount = 0;
    let toysPrice = 0;
    let sweatersPrice = 0;
    while (command !== "Christmas") {
        let age = Number(command)
        if (age <= 16) {
            kidsCount++;
            toysPrice = kidsCount * 5;
        } else if(age > 16) {
            adultsCount++;
            sweatersPrice = adultsCount * 15;
        }

        command = input.shift();
    }

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);
}
christmasGifts([16, 20, 46, 12, 8, 20, 49, 'Christmas'])