function fruitOrVegetable(type :string) :void {
    if (type === "banana" || type === "apple" || type === "kiwi" || type === "cherry" || type === "lemon" || type === "grape") {
        console.log("fruit");
    }
    else if (type === "tomato" || type === "cucumber" || type === "pepper" || type === "carrot") {
        console.log("vegetable");
    }
    else {
        console.log("unknown");
    }
}
fruitOrVegetable("apple");