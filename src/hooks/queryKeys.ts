const QUERY_KEYS = {
  todoList: ['todoList'],
  todoDetail: (todoId: number) => ['todoDetail', todoId],
} as const;

export default QUERY_KEYS;
