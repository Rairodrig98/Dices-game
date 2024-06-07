//player1 
let randomNumber1 = (Math.random() *6 )+1;
randomNumber1 = Math.floor( randomNumber1);

//getting the image element
let image1 = document.querySelector(".img1");

let path1 = "./images/dice" + randomNumber1 + ".png";

image1.setAttribute("src", path1)


//player2
let randomNumber2 = (Math.random() *6 )+1;
randomNumber2 = Math.floor( randomNumber2);

//getting the image element
let image2 = document.querySelector(".img2");

let path2 = "./images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", path2)

console.log(randomNumber1,randomNumber2, image1, image2)


let title = document.querySelector("h1")
//If both are the same, tie
//If number 1 bigger, n1 wins
//if number 2 bigger, n2 wins
if(randomNumber1 < randomNumber2 ){
    console.log("PLayer2 wins") 
    title.textContent = "Player 2 wins🤘"
}
if(randomNumber1 > randomNumber2 ){
    console.log("Player1 wins")
    title.textContent = "Player 1 wins🥳"
}
if(randomNumber1 == randomNumber2 ){
    console.log("Tie")
    title.textContent = "Tie 🙌"
}



//get a random number and mutiply it by 6
//create a varaible
//multiply it by 6
//console.log() the results

