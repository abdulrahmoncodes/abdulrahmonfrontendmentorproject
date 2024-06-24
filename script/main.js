let cartQuantity = document.querySelector(".cart-item");
const decreaseQuantity = document.querySelector(".minus");
const increaseQuantity = document.querySelector(".plus");
let productQuantity = document.querySelector(".zero");
const addToCart = document.querySelector(".cart-setion");
const cartIcon = document.querySelector(".cart-icon");
const productDisplay = document.querySelector(".product-display");

let updatedQuantity = 0;
decreaseQuantity.addEventListener("click", () => {
	updatedQuantity -= 1;
	productQuantity.innerHTML = updatedQuantity;
	cartQuantity.innerHTML = updatedQuantity;
});

increaseQuantity.addEventListener("click", () => {
	updatedQuantity += 1;
	productQuantity.innerHTML = updatedQuantity;
	cartQuantity.innerHTML = updatedQuantity;
});

let html = ``;
products.forEach((product) => {
	html += `<div class="product-container">
	<img class="resize-img" src="${product.image}" alt="" />
	<div class="product-name">${product.name}</div>
	<div class="js-product-${product.id}">
		<select class="product-selected">
			<option selected value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>
	</div>
	<div class="product-price_container">Price : $${product.price.toFixed(2)} </div>
	<div class="added-to-cart">Add to cart</div>
</div>
`;
});

productDisplay.innerHTML = html;

products.forEach((product) => {
	let productId = console.log(
		document.querySelector(`.js-product-${productId}`).value
	);
});
