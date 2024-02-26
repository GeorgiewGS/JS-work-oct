function goldMining(input) {
    let locationsCount = Number(input[0]);

    for (let i = 0; i < locationsCount; i++) {
        let expectedAverage = Number(input[i * 2 + 1]);
        let daysCount = Number(input[i * 2 + 2]);

        let totalGold = 0;

        for (let day = 1; day <= daysCount; day++) {
            let dailyGold = Number(input[i * 3 + 2 + day]);
            totalGold += dailyGold;
        }

        let averageGoldPerDay = totalGold / daysCount;

        if (averageGoldPerDay >= expectedAverage) {
            console.log("Good job! Average gold per day: " + averageGoldPerDay.toFixed(2) + ".");
        } else if(averageGoldPerDay < expectedAverage){
            let neededGold = (expectedAverage * daysCount) - totalGold;
            console.log("You need " + neededGold.toFixed(2) + " gold.");
        }
    }
}
goldMining([1, 5, 3, 10, 1, 3])
