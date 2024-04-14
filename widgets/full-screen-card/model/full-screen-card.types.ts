import { Coffee } from '../../../shared/types';

export type ProductState =
	| { product: Coffee; isLoading: false; error: null } // success
	| { product: null; isLoading: true; error: null } // loading
	| { product: null; isLoading: false; error: string } // error
	| { product: null; isLoading: false; error: null }; // start

export type FullScreenCardProps = {
	productId: number | string;
};
