function computerRoom(input) {
    let month = input[0];
    let hoursSpent = Number(input[1]);
    let peopleInGroup = Number(input[2]);
    let timeOfDay = input[3];
    let pricePerHour = 0;

    if ((month === "march" || month === "april" || month === "may") && timeOfDay === "day") {
        pricePerHour = 10.50;
    } else if ((month === "march" || month === "april" || month === "may") && timeOfDay === "night") {
        pricePerHour = 8.40;
    } else if ((month === "june" || month === "july" || month === "august") && timeOfDay === "day") {
        pricePerHour = 8.40;
    } else if ((month === "june" || month === "july" || month === "august") && timeOfDay === "night") {
        pricePerHour = 10.20;
    }
    let totalCost = (pricePerHour * peopleInGroup) * hoursSpent;
    if (peopleInGroup >= 4) {
        pricePerHour *= 0.90; 
    }
    if (hoursSpent >= 5) {
        pricePerHour *= 0.50; 
    }

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);
}
computerRoom(['july', 5, 5, 'night'])