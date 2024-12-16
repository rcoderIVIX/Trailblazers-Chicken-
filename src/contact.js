
export function contact(){
let content = document.querySelector('#content')

let prompt = document.createElement("div")
prompt.textContent = "Contact Information"
prompt.classList.add("prompt")

content.appendChild(prompt)

let card = document.createElement('div')
card.classList.add('card')

content.appendChild(card)

let cardHeader = document.createElement('div')
cardHeader.classList.add("card-header")
cardHeader.textContent = 'Grandma Ida'

let idaline1 = document.createElement('div')
idaline1.classList.add("ida")
let idaline2 = document.createElement('div')
idaline2.classList.add("ida")
let idaline3 = document.createElement('div')
idaline3.classList.add("ida")
idaline1.textContent = "Original Founder"
idaline2.textContent = "123-456-7890"
idaline3.textContent = "grandmaida@trailblazerschicken.org"

card.appendChild(cardHeader)

card.appendChild(idaline1)

card.appendChild(idaline2)

card.appendChild(idaline3)


let chef = document.createElement('div')
chef.classList.add('card')

content.appendChild(chef)

let chefHeader = document.createElement('div')
chefHeader.classList.add("card-header")
chefHeader.textContent = 'Chef Franklin'

let frankline1 = document.createElement('div')
frankline1.classList.add("ida")
let frankline2 = document.createElement('div')
frankline2.classList.add("ida")
let frankline3 = document.createElement('div')
frankline3.classList.add("ida")
frankline1.textContent = "Our Expert Chef"
frankline2.textContent = "042-455-2323"
frankline3.textContent = "frankthecook@trailblazerschicken.org"

chef.appendChild(chefHeader)

chef.appendChild(frankline1)

chef.appendChild(frankline2)

chef.appendChild(frankline3)

}