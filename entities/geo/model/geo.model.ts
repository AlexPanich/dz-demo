import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Geo = string | null;
export type Comment = string | null;
export type Address = {
	geo: Geo;
	coment: Comment;
};

const INITIAL_STATE = {
	geo: null,
	coment: null,
};

const storage = createJSONStorage<Address>(() => AsyncStorage);

export const addressAtom = atomWithStorage<Address>('geo', INITIAL_STATE, storage);
