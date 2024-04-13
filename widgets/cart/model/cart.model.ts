import { atom } from 'jotai';
import { CartAtomParams, CartItem, Check } from './cart.types';
import { factorSize } from '../../../shared/constants';

export const cartAtom = atom<CartItem[]>([]);
export const addToCartAtom = atom(null, (get, set, { product, size }: CartAtomParams) => {
	const items = get(cartAtom);
	const currentItem = items.find((item) => item.product.id === product.id && item.size === size);
	if (currentItem) {
		currentItem.count++;
		set(cartAtom, [...items]);
	} else {
		set(cartAtom, [...items, { product, size, count: 1 }]);
	}
});

export const removeFromCartAtom = atom(null, (get, set, { product, size }: CartAtomParams) => {
	const items = get(cartAtom);
	const currentItem = items.find((item) => item.product.id === product.id && item.size === size);
	if (!currentItem) {
		return;
	}
	if (currentItem.count > 1) {
		currentItem.count--;
		set(cartAtom, [...items]);
	} else {
		set(
			cartAtom,
			items.filter((item) => item !== currentItem),
		);
	}
});

export const deliveryPriceAtom = atom(100);

export const checkAtom = atom<Check>((get) => {
	const items = get(cartAtom);

	const productsCost = items.reduce((total, item) => {
		return total + (item.product.price + factorSize[item.size]) * item.count;
	}, 0);

	const deliveryCost = productsCost > 0 ? get(deliveryPriceAtom) : 0;

	const totalCost = productsCost + deliveryCost;

	return {
		productsCost,
		deliveryCost,
		totalCost,
	};
});
