document.getElementById("addTicket").addEventListener('click', displayticketInfo)

function calculateticket() {
    let discount = 0;

    let kilometers = parseInt(document.getElementById('inputKilometers').value)
    let age = parseInt(document.getElementById('inputAge').value)

    let price = 0.21 * kilometers;

    if (age < 18) {
        discount = 20
    } else if (age > 65) {
        discount = 40
    }

    if (discount != 0) {
        price -= (price / 100) * discount
    }

    return price.toFixed(2);
}

function displayticketInfo() {
    let infoContainer = document.getElementById("ticket-info");

    // If the container doesn't exist, create it once
    if (!infoContainer) {
        let ticketTitle = document.createElement("h2");
        const body = document.querySelector("body");
        infoContainer = document.createElement("div");

        ticketTitle.textContent = "Il tuo biglietto";
        ticketTitle.classList = "mt-5";

        infoContainer.id = "ticket-info";
        infoContainer.classList = document.getElementById("main-container").classList;
        infoContainer.classList.add("row", "row-cols-3")

        body.appendChild(ticketTitle)
        body.appendChild(infoContainer)
        infoContainer.appendChild(buildNameDisplay())
        infoContainer.appendChild(buildCarriageDisplay())
        infoContainer.appendChild(buildPriceDisplay())
    }
}



function buildNameDisplay() {
    const passengerName = document.getElementById("inputUserInfo").value;
    let passengerContainer = document.getElementById("passenger-container");

    // If the container doesn't exist, create it once
    if (!passengerContainer) {
        passengerContainer = document.createElement("div");
        passengerContainer.id = "passenger-container";
        passengerContainer.classList.add("text-start")

        const title = document.createElement("h3");
        title.textContent = "Nome Persona";
        title.classList.add("mb-2")
        passengerContainer.appendChild(title)

        const nameContainer = document.createElement("p")
        nameContainer.textContent = passengerName;
        passengerContainer.append(nameContainer)
    }

    return passengerContainer;
}

function buildCarriageDisplay() {
    let carriageContainer = document.getElementById("carriage-container")

    if (!carriageContainer) {
        carriageContainer = document.createElement("div");
        carriageContainer.id = "carriage-container";

        const title = document.createElement("h5");
        title.textContent = "carrozza";
        carriageContainer.appendChild(title);

        const carriageNumber = document.createElement("p");
        carriageNumber.textContent = randomNumber(1, 100);
        carriageNumber.classList.add("d-flex", "justify-content-center", "align-items-center")
        carriageContainer.appendChild(carriageNumber);
    }

    return carriageContainer;
}

function  buildPriceDisplay() {
    let priceContainer = document.getElementById("price-container");

    if (!priceContainer) {
        priceContainer = document.createElement("div");
        priceContainer.id = "price-container";

        const title = document.createElement("h5");
        title.textContent = "prezzo";
        priceContainer.appendChild(title);

        const price = document.createElement("p");
        price.textContent = calculateticket();
        priceContainer.appendChild(price);
    }

    return priceContainer
}

let randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
