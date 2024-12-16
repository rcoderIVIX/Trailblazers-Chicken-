import chickenImagePath from './chicken.png'

import chickenSandwich from './sandwich.png'

import softDrinks from './soft-drinks.png'

export function menu(){
    let content = document.querySelector("#content")

    let prompt = document.createElement("div")
    prompt.textContent = "Trailblazer's - Our Menu"
    prompt.classList.add("prompt")
    
    content.appendChild(prompt)
    
    let chickenz = document.createElement("div")
    chickenz.classList.add("chickenz")
    content.appendChild(chickenz)
    
    let card = document.createElement("div")
    card.classList.add("card")
    
    chickenz.appendChild(card)
    
    let cardHeader = document.createElement("div")
    cardHeader.classList.add("card-header")
    cardHeader.textContent = "Trailblazer's Chicken"
    
    chickenz.appendChild(card);
    
    card.appendChild(cardHeader)
    
    let cardblurb = document.createElement('div')
    cardblurb.textContent = "Our classic chicken! Crispy skin with tender, juicy meat and... well, you know the rest. "
    
    card.appendChild(cardblurb)
    
    let chickenimage = document.createElement("img")
    chickenimage.src = chickenImagePath;
    
    chickenimage.alt = "A Delicious Bucket of Chicken"
    
    chickenimage.width = 300;
    chickenimage.height = 300;
    
    chickenz.appendChild(chickenimage)

    let sandwiches = document.createElement("div")
    sandwiches.classList.add("chickenz")
    content.appendChild(sandwiches)

    let sandwichCard = document.createElement("div")
    sandwichCard.classList.add("card")

    sandwiches.appendChild(sandwichCard)

    let sandwichHeader = document.createElement("div")
    sandwichHeader.classList.add("card-header")
    sandwichHeader.textContent = "Trailblazer's Sandwiches"

    sandwichCard.appendChild(sandwichHeader)

    let sandwichBlurb = document.createElement('div')
    sandwichBlurb.textContent = "Trailblazer's mouthwatering chicken sandwiches- Get them in Classic, Spicy, or Honey Barbeque Flavors!"
    sandwichCard.appendChild(sandwichBlurb)
    
    let sandwichImage = document.createElement("img")
    sandwichImage.src = chickenSandwich;
    
    sandwichImage.alt = "A Delicious Chicken Sandwich!"
    
    sandwichImage.width = 300;
    sandwichImage.height = 300;

    sandwiches.appendChild(sandwichImage);


    let drinks = document.createElement('div')
    drinks.classList.add('chickenz')
    content.appendChild(drinks)

    let drinksCard = document.createElement('div')
    drinksCard.classList.add('card')

    drinks.appendChild(drinksCard)

    let drinksHeader = document.createElement('div')
    drinksHeader.classList.add("card-header")
    drinksHeader.textContent = "Drinks, Sides & More!"

    drinksCard.appendChild(drinksHeader)

    let drinksBlurb = document.createElement('div')
        drinksBlurb.textContent = "Select some extras to add to your dining experience! We've got a whole selection of sides, don't be shy!"
        drinksCard.appendChild(drinksBlurb)

        let drinksImage = document.createElement("img")
    drinksImage.src = softDrinks;
    
    drinksImage.alt = "A Delicious Chicken Sandwich!"
    
    drinksImage.width = 300;
    drinksImage.height = 300;

    drinks.appendChild(drinksImage)
    


}