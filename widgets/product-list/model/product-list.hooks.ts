import { useAtomValue, useSetAtom } from 'jotai';
import { loadProductsAtom, productsAtom } from '../model/product-list.model';
import { useEffect } from 'react';
import { searchAtom } from '../../../features/search/model/search.model';
import { typeSelectAtom } from '../../../features/type-select/model/type-select.model';

export const useProducts = () => {
	const loadProducts = useSetAtom(loadProductsAtom);
	const produtsState = useAtomValue(productsAtom);
	const search = useAtomValue(searchAtom);
	const selectedType = useAtomValue(typeSelectAtom);

	useEffect(() => {
		loadProducts();
	}, [search, selectedType]);

	return produtsState;
};
