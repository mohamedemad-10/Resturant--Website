function updateMainFoodImage() {
    const mainFood = document.getElementById("main-food").value;
    const mainFoodImg = document.getElementById("main-food-img");
    const images = {
        pizza: "./images/pizza.png",
        Burger : "./images/frise.png",
        pasta: "./images/pasta.png",
        Salad: "./images/salafe.png",
        Fish: "./images/fish.png",
        Lasagna: "./images/lesonge.png",
        Vegetable: "./images/vegetablise.png",
        Barbecue: "./images/grill.png"
    };

    if (mainFood) {
        mainFoodImg.src = images[mainFood];
        mainFoodImg.style.display = "block";
    } else {
        mainFoodImg.style.display = "none";
    }
}
function updatedrinksImage() {
    const drinks = document.getElementById("drink").value;
    const drinksImg = document.getElementById("drinks-img");
    const images = {
        Orange: "./images/orang.png",
        coffee : "./images/cup coff.png",
        Chocolate: "./images/choc-coffe.png",
        Lemon: "./images/ice-lemon.png",
        Hot: "./images/hot-cho.png",
        Iced: "./images/ice-coffe.png",
        Foam: "./images/Foam.png",
        Cocktail: "./images/coffe.png"
    };

    if (drinks) {
        drinksImg.src = images[drinks];
        drinksImg.style.display = "block";
    } else {
        drinksImg.style.display = "none";
    }
}
function updatedessertsImage() {
    const desserts = document.getElementById("dessert").value;
    const dessertsImg = document.getElementById("desserts-img");
    const images = {
        apples: "./images/apple.png",
        Drizzled : "./images/bread-choc.png",
        icecream: "./images/ice cream.png",
        Cake: "./images/cake.png",
        Chocolatet: "./images/chocolate.png",
        Panake: "./images/ice-coffe.png",
        croissant: "./images/coraso.png",
        Doughnuts: "./images/donate.png"
    };

    if (drinks) {
        dessertsImg.src = images[desserts];
        dessertsImg.style.display = "block";
    } else {
        dessertsImg.style.display = "none";
    }
}
function updateTotal() {
    const prices = {
        Barbecue: 35.00,
        Vegetable: 40.00,
        Fish: 50.00,
        Salad: 60.00,
        Lasagna: 40.00,
        pizza: 45.00,
        Burger: 35.00,
        pasta: 30.00,
        Panake: 1.50,
        croissant: 1.00,
        Cake: 3.50,
        Doughnuts: 10.00,
        croissant: 8.00,
        Chocolatet: 11.00,
        Drizzled: 9.00,
        icecream: 4.00,
        apples:7.00,
        Chocolate: 3.00,
        coffee: 5.00,
        Lemon: 4.00,
        Foam: 5.00,
        Cocktail: 7.00,
        Hot: 2.00,
        Iced: 3.5,
        Orange: 2.00
  
    };

    let total = 0;

    const mainFood = document.getElementById("main-food").value;
    const drink = document.getElementById("drink").value;
    const dessert = document.getElementById("dessert").value;

    if (mainFood) total += prices[mainFood];
    if (drink) total += prices[drink];
    if (dessert) total += prices[dessert];

    document.getElementById("total-price").innerText = total.toFixed(2);
}

document.getElementById("main-food").addEventListener("change", updateTotal);
document.getElementById("drink").addEventListener("change", updateTotal);
document.getElementById("dessert").addEventListener("change", updateTotal);