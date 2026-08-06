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

/** 할 일 목록 불러오기 api */
export const getTodoListApi = async () => {
  console.log('API_ENDPOINTS.todos', API_ENDPOINTS.todos)
  const response = await fetch(API_ENDPOINTS.todos, {
    method: 'GET',
    headers: COMMON_HEADERS,
    // cache: 'force-cache',
  });
  console.log('response', response);
};
