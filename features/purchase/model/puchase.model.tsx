import { atom } from 'jotai';
import { deliveryInfoAtom } from '../../../widgets/delivery-info/model/delivery-info.model';
import { cartAtom } from '../../../widgets/cart/model/cart.model';
import { API } from '../api/api';
import axios, { AxiosError } from 'axios';

type Purchase =
	| { success: null; isLoading: false; error: null }
	| { success: null; isLoading: true; error: null }
	| { success: true; isLoading: false; error: null }
	| { success: false; isLoading: false; error: string };

const INITIAL_STATE = {
	success: null,
	isLoading: false,
	error: null,
};

export const purchaseAtom = atom<Purchase>(INITIAL_STATE);

export const makePurchaseAtom = atom(null, async (get, set) => {
	const deliveryInfo = await get(deliveryInfoAtom);
	const address = deliveryInfo.geo;
	if (!address) return;

	const cart = get(cartAtom);
	const orderItems = cart.map((item) => ({
		id: item.product.id,
		size: item.size,
		quantity: item.count,
	}));
	if (orderItems.length === 0) return;

	const body = { address, orderItems };

	set(purchaseAtom, {
		success: null,
		isLoading: true,
		error: null,
	});

	try {
		await axios.post<{ message: string; success: true }>(API.order, body);

		set(purchaseAtom, {
			success: true,
			isLoading: false,
			error: null,
		});
		set(cartAtom, []);
	} catch (error) {
		if (error instanceof AxiosError) {
			set(purchaseAtom, {
				success: null,
				isLoading: false,
				error: error.response?.data.message || error.message,
			});
		}
	}
});

export const clearPurchaseAtom = atom(null, (_get, set) => {
	set(purchaseAtom, INITIAL_STATE);
});
