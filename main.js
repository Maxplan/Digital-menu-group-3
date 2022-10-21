
let recipes = [
    {
        title: "FLÄSKFILEPLANKA",
        meat: true,
        vegetarian: false,
        allergy: "none",
        price: 149,
        image: "./images/food.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "HUSETS SCHNITZEL",
        meat: false,
        vegetarian: true,
        allergy: "none",
        price: 175,
        image: "./images/food.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "FISH'N CHIPS",
        meat: true,
        vegetarian: false,
        allergy: "none",
        price: 149,
        image: "./images/asparagus.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "Potatis",
        meat: false,
        vegetarian: true,
        allergy: "laktos",
        price: 80,
        image: "./images/bar.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "KRÄMIG KYCKLINGPASTA",
        meat: true,
        vegetarian: false,
        allergy: "none",
        price: 169,
        image: "./images/bar.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "BIFF RYDBERG",
        meat: true,
        vegetarian: false,
        allergy: "none",
        price: 175,
        image: "./images/egg.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "Hamburgare",
        meat: true,
        vegetarian: false,
        allergy: "gluten",
        price: 50,
        image: "./images/food.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "MUSSLOR AL CAVA",
        meat: false,
        vegetarian: true,
        allergy: "none",
        price: 109,
        image: "./images/asparagus.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
]

const cardsContainer = document.querySelector(".cardsContainer");
let filterByMeat = false;
let filterByVegetarian = false;
let filterByLactos = false;
let filterByGluten = false;

// Creates a card in HTML file
function createCard(cardNumber) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.insertAdjacentElement("beforeend", card);
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h3");
    const cardPrice = document.createElement("p");
    const cardButton = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    cardButton.classList.add("detailsBtn");
    cardButton.setAttribute("type", "submit");
    cardButton.setAttribute("onclick", "openPopup(" + cardNumber + ")");
    addToCartBtn.classList.add("detailsBtn");
    addToCartBtn.setAttribute("type", "submit");
    addToCartBtn.setAttribute("onclick", "addToCart(" + cardNumber + "); openShoppingCart()");
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);
    card.appendChild(cardButton);
    card.appendChild(addToCartBtn);
    cardImg.setAttribute("src", getMenu()[cardNumber].image);
    cardTitle.innerHTML = getMenu()[cardNumber].title;
    cardPrice.innerHTML = getMenu()[cardNumber].price + " KR";
    cardButton.innerHTML = "Details";
    addToCartBtn.innerHTML = "Lägg till Cart";
}


// Create a new Array according to the current state of the user input
function getMenu() {
    return recipes.filter(item => {
        const isMeat = filterByMeat ? item.meat : true;
        const isVegetarian = filterByVegetarian ? item.vegetarian : true;
        const isLactos = filterByLactos ? !item.allergy.includes("laktos") : true;
        const isGluten = filterByGluten ? !item.allergy.includes("gluten") : true;
        return isMeat && isVegetarian && isLactos && isGluten;
    });
}

// Creates all the cards from Array recipe
function createCards() {
    getMenu().forEach((element, index) => {
        createCard(index);
    });
}

createCards();


