import { cart } from "../data/cart.js";
import { products } from "../data/product.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
	const productId = cartItem.productId;

	let matchingProduct;

	products.forEach((product) => {
		if (product.id === productId) {
			matchingProduct = product;
		}
	});

	cartSummaryHTML += `
				<div class="delivery-details">
						<p class="delivery-date">Delivery date: Monday, June 24</p>
						<div class="delivery-details__product ${matchingProduct.id}">
							<div class="flex">
								<div class="product-container">
									<img
										src="${matchingProduct.image}"
										alt="product"
										class="delivery-product" />
								</div>
								<div class="product-details">
									<p>${matchingProduct.name}</p>
									<p class="product-price">$${formatCurrency(matchingProduct.price)}</p>
									<div class="product-quantity">
										<span
											>Quantity:${cartItem.quantity}
											<span> <a href="checkout.html">Update</a> </span>
											<span><a href="checkout.html">Delete</a> </span>
										</span>
									</div>
								</div>
							</div>

							<div class="delivery-options">
								<p>Choose delivery option:</p>
								<div class="delivery-options--radio">
									<input type="radio" name="delivery-${matchingProduct.id}" />
									<div class="delivery-options_date">Monday, June 24</div>
								</div>
								<div class="delivery-options-price">FREE Shipping</div>
								<div class="delivery-options--radio">
									<input type="radio" name="delivery-${matchingProduct.id}}" />
									<div class="delivery-options_date">Friday, June 27</div>
								</div>
								<div class="delivery-options-price">$9.99 - Shipping</div>
								<div class="delivery-options--radio">
									<input type="radio" name="delivery-${matchingProduct.id}" />
									<div class="delivery-options_date">Wednesday, July 14</div>
								</div>
								<div class="delivery-options-price">$4.78 - Shipping</div>
							</div>
						</div>
					</div>
`;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
