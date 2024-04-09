import { atom } from 'jotai';
import { CoffeeType } from '../../../widgets/product-list/model/types';

export const typeSelectAtom = atom<CoffeeType | null>(null);
