import { get } from '../utils/api.js';

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => get('/todos');
