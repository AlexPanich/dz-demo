import { Coffee, Size } from '../../../shared/types';

export type CartItem = {
	product: Coffee;
	size: Size;
	count: number;
};

export type Check = {
	productsCost: number;
	deliveryCost: number;
	totalCost: number;
};

export type CartAtomParams = {
	product: Coffee;
	size: Size;
};
