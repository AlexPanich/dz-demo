import { atom } from 'jotai';
import { ProductState } from './full-screen-card.types';
import { API } from '../api/api';
import axios, { AxiosError } from 'axios';
import { Coffee } from '../../../shared/types';

export const productAtom = atom<ProductState>({
	product: null,
	isLoading: false,
	error: null,
});

export const loadProductAtom = atom(null, async (get, set, { id }: { id: number | string }) => {
	set(productAtom, {
		product: null,
		isLoading: true,
		error: null,
	});

	try {
		const { data } = await axios.get<Coffee | null>(API.getById(id));

		set(productAtom, {
			product: data,
			isLoading: false,
			error: null,
		});
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		if (error instanceof AxiosError) {
			set(productAtom, {
				product: null,
				isLoading: false,
				error: error.response?.data.message || error.message,
			});
		}
	}
});
