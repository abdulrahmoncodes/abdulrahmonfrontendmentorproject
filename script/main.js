let cartQuantity = document.querySelector(".cart-item");
const decreaseQuantity = document.querySelector(".minus");
const increaseQuantity = document.querySelector(".plus");
let productQuantity = document.querySelector(".zero");
const addToCart = document.querySelector(".cart-section");
const cartIcon = document.querySelector(".cart-icon");
const productDisplay = document.querySelector(".product-display");

let updatedQuantity = 0;
decreaseQuantity.addEventListener("click", () => {
	updatedQuantity -= 1;
	productQuantity.innerHTML = updatedQuantity;
	cartQuantity.innerHTML = updatedQuantity;
});

console.log();
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
		<select class="js-${product.id} product-selected">
			<option selected value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>
	</div>
	<div class="product-price_container">Price : $${product.price.toFixed(2)} </div>
	<div class='added'>
	<img class='checkmark-img' src='images/checkmark.png'/>
	<span>Added</span>
	</div>
	<button class="added-to-cart js-add-to-cart" data-product-id="${
		product.id
	}">Add to cart</button>
</div>
`;
});

productDisplay.innerHTML = html;

document.querySelectorAll(".js-add-to-cart").forEach((btn) => {
	btn.addEventListener("click", () => {
		let { productId } = btn.dataset;
		console.log(productId);
		const productQuantity = document.querySelector(`.js-${productId}`).value;

		let cartProduct = 0;
		let quantity = Number(productQuantity);
		cartProduct += quantity;
		cartQuantity.innerHTML = cartProduct;

		let matchingItem;
		cart.forEach((item) => {
			if (productId === item.productId) {
				matchingItem = item;
			}
		});

		if (matchingItem) {
			matchingItem.quantity += quantity;
		} else {
			cart.push({ productId, quantity });
		}

		console.log(cart);
	});
});
