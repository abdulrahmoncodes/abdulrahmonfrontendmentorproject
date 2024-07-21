export let cart = [
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
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});

	if (matchingItem) {
		matchingItem.quantity += 1;
	} else {
		cart.push({
			productId: productId,
			quantity: 1,
		});
	}
}

addToCart(2);
