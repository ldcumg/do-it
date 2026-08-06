import { API_ENDPOINTS, COMMON_HEADERS } from './constants';
import type { TodoType } from './types';

/** 할 일 등록 api */
export const addTodoApi = async (newTodo: string) => {
  await fetch(API_ENDPOINTS.todos, {
    method: 'POST',
    headers: COMMON_HEADERS,
    cache: 'no-store',
    body: JSON.stringify({
      name: newTodo,
    }),
  });
};

/** 할 일 목록 불러오기 api */
export const getTodoListApi = async (): Promise<TodoType[]> => {
  const response = await fetch(API_ENDPOINTS.todos, {
    method: 'GET',
    headers: COMMON_HEADERS,
    cache: 'no-store',
  });
  return await response.json();
};

/** 할 일 상세정보 불러오기 api */
export const getTodoDetailApi = async (): Promise<TodoType[]> => {
  const response = await fetch(API_ENDPOINTS.todos, {
    method: 'GET',
    headers: COMMON_HEADERS,
    cache: 'force-cache',
  });
  return await response.json();
};

/** 할 일 수정 api */
export const patchTodoDetailApi = async (
  todoId: number,
  updateTodoData: Partial<TodoType>,
) => {
  await fetch(API_ENDPOINTS.todoDetail(todoId), {
    method: 'PATCH',
    headers: COMMON_HEADERS,
    cache: 'no-store',
    body: JSON.stringify(updateTodoData),
  });
};
