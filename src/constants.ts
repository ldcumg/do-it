import { API_BASE_URL_ENV } from './env';

const API_BASE_URL = `${API_BASE_URL_ENV}/api/cnlgid` as const;

export const COMMON_HEADERS = {
  'Content-Type': 'application/json',
} as const;

export const API_ENDPOINTS = {
  todos: `${API_BASE_URL}/items`,
  todoDetail: (itemId: number) => `${API_BASE_URL}/items/${itemId}`,
  image: `${API_BASE_URL}/images/upload`,
} as const;
