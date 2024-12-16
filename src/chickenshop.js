import chickenImagePath from './chicken.png'

export function chickenShop(){

let content = document.querySelector("#content")

let prompt = document.createElement("div")
prompt.textContent = "Take a delicious bite of our world renowned chicken!"
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
cardHeader.textContent = "Trailblazer's Classic"

chickenz.appendChild(card);

card.appendChild(cardHeader)

let cardblurb = document.createElement('div')
cardblurb.textContent = "Classic Chicken Bucket. Crispy skin with tender, juicy chicken and seasonings that'll make you come back for more!"

card.appendChild(cardblurb)

let chickenimage = document.createElement("img")
chickenimage.src = chickenImagePath;

chickenimage.alt = "A Delicious Bucket of Chicken"

chickenimage.width = 300;
chickenimage.height = 300;

chickenz.appendChild(chickenimage)

let pageblurb = document.createElement("div");

let line1 = document.createElement("div");

let line2 = document.createElement("div");

let line3 = document.createElement("div");

pageblurb.classList.add("blurb");

content.appendChild(pageblurb);

line1.textContent = "Step back in time to 1936, when Trailblazer's Chicken first opened its doors in a humble corner of town. What began as a family-run roadside eatery quickly became a beloved institution, famous for its tender, golden-fried chicken. The secret? A century-old recipe handed down through generations, blending 12 carefully guarded herbs and spices that create a flavor like no other."

line2.textContent = "Legend has it that the founder, Grandma Ida, perfected the recipe after years of experimenting in her farmhouse kitchen, using only the freshest, locally-sourced ingredients. Her dedication to quality and tradition has remained at the heart of Trailblazer's Chicken, even as it grew into a cherished landmark."

line3.textContent = "Today, Trailblazer's Chicken continues to serve up the same signature chicken that made it famous nearly a century ago, alongside a warm, nostalgic dining experience. Whether you're a first-timer or a lifelong fan, every bite is a taste of history."

pageblurb.appendChild(line1)

pageblurb.appendChild(line2)

pageblurb.appendChild(line3)


}

