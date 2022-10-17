
let recipe = [
    {
        title: "FLÄSKFILEPLANKA",
        price: 149,
        image: "./images/food.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "FISH'N CHIPS",
        price: 149,
        image: "./images/asparagus.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "KRÄMIG KYCKLINGPASTA",
        price: 169,
        image: "./images/bar.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "BIFF RYDBERG",
        price: 175,
        image: "./images/egg.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "HUSETS SCHNITZEL",
        price: 175,
        image: "./images/food.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
    {
        title: "MUSSLOR AL CAVA",
        price: 109,
        image: "./images/asparagus.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel dicta excepturi quo,
                        omnis modi corrupti? Corporis quas, quos accusamus iste tempora odio, eaque quasi voluptas culpa
                        id, consectetur libero`
    },
]

const cardsContainer = document.querySelector(".cardsContainer");
const sortAscendingButton = document.getElementById("sortAscendingBtn");
const sortDescendingButton = document.getElementById("sortDescendingBtn");

// Hide Fallande Prisordning Button from the webpage
sortDescendingButton.style.display = "none";

// Creates a card in HTML file
function createCard(cardNumber) {
    let card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.insertAdjacentElement("beforeend", card);
    let cardImg = document.createElement("img");
    let cardText = document.createElement("div");
    card.appendChild(cardImg);
    card.appendChild(cardText);
    let cardTitle = document.createElement("h3");
    let cardPrice = document.createElement("p");
    let cardButton = document.createElement("button");
    cardButton.classList.add("detailsBtn");
    cardButton.setAttribute("type", "submit");
    cardButton.setAttribute("onclick", "openPopup(" + cardNumber + ")");
    cardText.appendChild(cardTitle);
    cardText.appendChild(cardPrice);
    cardText.appendChild(cardButton);
    cardImg.setAttribute("src", recipe[cardNumber].image);
    cardTitle.innerHTML = recipe[cardNumber].title;
    cardPrice.innerHTML = recipe[cardNumber].price + " KR";
    cardButton.innerHTML = "Details";
}

// Creates all the cards from Array recipe
function createCards() {
    recipe.forEach((element, index) => {
        createCard(index);
    });
}

createCards();





