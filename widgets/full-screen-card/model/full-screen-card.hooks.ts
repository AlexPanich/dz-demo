import { useAtomValue, useSetAtom } from 'jotai';
import { loadProductAtom, productAtom } from './full-screen-card.model';
import { useEffect } from 'react';

export const useProduct = (productId: string | number) => {
	const loadProduct = useSetAtom(loadProductAtom);
	const productState = useAtomValue(productAtom);

	useEffect(() => {
		loadProduct({ id: productId });
	}, [productId]);

	return productState;
};
