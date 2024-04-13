import { atom } from 'jotai';
import { CoffeeType } from '../../../shared/types';

export const typeSelectAtom = atom<CoffeeType | null>(null);
