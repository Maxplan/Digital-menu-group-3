// Show all the dishes in no order when pressing the Alla Rätter button.

function allDishes() {
    location.reload();
    cardsContainer.innerHTML = "";
    createCards();
}


// Sort the dishes in either descending or ascending price order.

function sortAscending() {
    cardsContainer.innerHTML = "";
    sortAscendingButton.style.display = "none";
    sortDescendingButton.style.display = "";
    recipe.sort((a, b) => (a.price > b.price ? 1 : -1));  
    createCards();
}

function sortDescending() {
    cardsContainer.innerHTML = "";
    sortAscendingButton.style.display = "";
    sortDescendingButton.style.display = "none";
    recipe.sort((a, b) => (a.price < b.price ? 1 : -1));
    createCards();
}

