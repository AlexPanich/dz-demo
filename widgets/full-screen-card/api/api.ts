import { PREFIX } from '../../../shared/api';

export const API = {
	getById: (id: number | string) => `${PREFIX}/id/${typeof id === 'string' ? id : id.toString()}`,
};
