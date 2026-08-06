import { API_ENDPOINTS, COMMON_HEADERS } from './constants';

/** 할 일 등록 api */
export const addTodoApi = async (newTodo: string) => {
  return await fetch(API_ENDPOINTS.todos, {
    method: 'POST',
    headers: COMMON_HEADERS,
    cache: 'no-store',
    body: newTodo,
    // body: JSON.stringify(newTodo),
  });
};
