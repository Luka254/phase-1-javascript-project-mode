let navbar = document.querySelector('.header .navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
    
}
const foodie=document.getElementById("foodie")
fetch("http://localhost:3000/food")
  .then(response => response.json())
  .then(food => {
    const logo=food[0].url;
    console.log(logo);
    foodie.textContent=logo;
    foodie.src=logo;
  })
  .catch(error => console.log('error', error));