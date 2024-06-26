import { atom } from 'jotai';
import { ProductListState } from './product-list.types';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { searchAtom } from '../../../features/search/model/search.model';
import { typeSelectAtom } from '../../../features/type-select/model/type-select.model';
import { Coffee } from '../../../shared/types';

export const productsAtom = atom<ProductListState>({
	products: [],
	isLoading: false,
	error: null,
});

export const loadProductsAtom = atom(null, async (get, set) => {
	set(productsAtom, {
		products: [],
		isLoading: true,
		error: null,
	});

	const search = get(searchAtom);
	const type = get(typeSelectAtom);

	try {
		const { data } = await axios.get<Coffee[] | null>(API.filter, {
			params: {
				text: search.length === 0 ? undefined : search.toLowerCase(),
				type: type ?? undefined,
			},
		});

		set(productsAtom, {
			products: data || [],
			isLoading: false,
			error: null,
		});
	} catch (error) {
		if (error instanceof AxiosError) {
			set(productsAtom, {
				products: [],
				isLoading: false,
				error: error.response?.data.message || error.message,
			});
		}
	}
});
