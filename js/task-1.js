function calculateOrderPrice(droidQuantity, droidPricePerUnit, customerCredits) {
    let totalPrice = 0;

    for (let i = 1; i <= droidQuantity; i++) {
        totalPrice += droidPricePerUnit;
    }
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${droidQuantity} droids worth ${totalPrice} credits!`;
    }
}
calculateOrderPrice;
console.log( calculateOrderPrice(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log( calculateOrderPrice(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log( calculateOrderPrice(10, 5000, 8000)); // "Insufficient funds!"
console.log( calculateOrderPrice(8, 2000, 10000)); // "Insufficient funds!"
console.log( calculateOrderPrice(10, 500, 5000)); // "You ordered 