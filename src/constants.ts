export const COMMON_HEADERS = {
  'Content-Type': 'application/json',
} as const;

export const API_ENDPOINTS = {
  todos: '/api/cnlgid/items',
  todoDetail: (itemId: string) => `/api/cnlgid/items/${itemId}`,
  image: '/api/cnlgid/images/upload',
} as const;
