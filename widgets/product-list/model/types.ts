import { Coffee } from '../../../shared/types';

export type ProductListState = {
	products: Coffee[];
	isLoading: boolean;
	error: string | null;
};
