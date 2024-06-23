let cartQuantity = document.querySelector(".cart-item");
const decreaseQuantity = document.querySelector(".minus");
const increaseQuantity = document.querySelector(".plus");
let productQuantity = document.querySelector(".zero");
const addToCart = document.querySelector(".cart-setion");
const cartIcon = document.querySelector(".cart-icon");

let updatedQuantity = 0;
decreaseQuantity.addEventListener("click", () => {
	console.log("added");
	updatedQuantity -= 1;
	productQuantity.innerHTML = updatedQuantity;
	cartQuantity.innerHTML = updatedQuantity;
});

increaseQuantity.addEventListener("click", () => {
	updatedQuantity += 1;
	productQuantity.innerHTML = updatedQuantity;
	cartQuantity.innerHTML = updatedQuantity;
});
