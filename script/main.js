let cartQuantity = document.querySelector(".cart-item");
const decreaseQuantity = document.querySelector(".minus");
const increaseQuantity = document.querySelector(".plus");
let productQuantity = document.querySelector(".zero");
const addToCart = document.querySelector(".cart-section");
const cartIcon = document.querySelector(".cart-icon");
const productDisplay = document.querySelector(".product-display");

// let updatedQuantity = 0;
// decreaseQuantity.addEventListener("click", () => {
// 	updatedQuantity -= 1;
// 	productQuantity.innerHTML = updatedQuantity;
// 	cartQuantity.innerHTML = updatedQuantity;
// });

// increaseQuantity.addEventListener("click", () => {
// 	updatedQuantity += 1;
// 	productQuantity.innerHTML = updatedQuantity;
// 	cartQuantity.innerHTML = updatedQuantity;
// });

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
	<div class='added js-added-to-cart-${product.id}'>
	<img class='checkmark-img' src='images/checkmark.png'/>
	Added
	</div>
	<button class="added-to-cart js-add-to-cart" data-product-id="${
		product.id
	}">Add to cart</button>
</div>
`;
});

productDisplay.innerHTML = html;

cartIcon.addEventListener("mouseover", () => {
	if (cartQuantity.innerHTML >= 1) {
		cartQuantity.classList.add("cart-visible");
	}
});

let cartProduct = 0;
document.querySelectorAll(".js-add-to-cart").forEach((btn) => {
	btn.addEventListener("click", () => {
		let { productId } = btn.dataset;
		console.log(productId);
		const productQuantity = document.querySelector(`.js-${productId}`).value;

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

		const addedMessage = document.querySelector(
			`.js-added-to-cart-${productId}`
		);
		addedMessage.classList.add("added-visible");

		// if (addedMessage) {
		// 	clearTimeout(addedMessage);
		// }

		const clearMessageId = setTimeout(() => {
			addedMessage.classList.remove("added-visible");
		}, 2000);

		console.log(clearMessageId);
	});
});
