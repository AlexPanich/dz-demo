import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Geo = string | null;
export type Comment = string | null;
export type DeliveryInfo = {
	geo: Geo;
	coment: Comment;
};

const INITIAL_STATE = {
	geo: null,
	coment: null,
};

const storage = createJSONStorage<DeliveryInfo>(() => AsyncStorage);

export const deliveryInfoAtom = atomWithStorage<DeliveryInfo>('geo', INITIAL_STATE, storage);
