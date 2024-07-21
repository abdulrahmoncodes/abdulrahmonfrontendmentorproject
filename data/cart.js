export const cart = [
	{
		productId: 5,
		quantity: 2,
	},
	{
		productId: 7,
		quantity: 1,
	},
	{
		productId: 6,
		quantity: 4,
	},
];

export function addToCart(productId) {
	let matchingItem;

	cart.forEach((cartItem) => {
		console.log(cartItem);

		const selectedProductId = cartItem.productId;

		if (productId === selectedProductId) {
			matchingItem = cartItem;
		}
	});
	console.log(matchingItem);
}

addToCart(2);
