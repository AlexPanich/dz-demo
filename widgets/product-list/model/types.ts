export type CoffeeType = 'cappuccino' | 'latte' | 'macchiato' | 'americano';

export type Coffee = {
	id: number;
	name: string;
	subTitle: string;
	type: CoffeeType;
	price: number;
	image: string;
	description: string;
	rating: number;
};

export type ProductListState = {
	products: Coffee[];
	isLoading: boolean;
	error: string | null;
};
