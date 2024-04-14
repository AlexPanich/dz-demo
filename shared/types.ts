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

export enum Size {
	S = 'S',
	M = 'M',
	L = 'L',
}
