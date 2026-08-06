import { API_BASE_URL_ENV } from './env';

const API_BASE_URL = `${API_BASE_URL_ENV}/api/v1` as const;

export const COMMON_HEADERS = {
  'Content-Type': 'application/json',
} as const;

export const API_ENDPOINTS = {
  todos: `${API_BASE_URL}/api/cnlgid/items`,
  todoDetail: (itemId: string) => `${API_BASE_URL}/api/cnlgid/items/${itemId}`,
  image: `${API_BASE_URL}/api/cnlgid/images/upload`,
} as const;
