import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addTodoApi,
  deleteTodoApi,
  getTodoDetailApi,
  getTodoListApi,
  patchTodoDetailApi,
} from '../apis';
import QUERY_KEYS from './queryKeys';
import type { TodoType } from '../types';

/** 할 일 목록 요청 쿼리 */
export const useGetTodoListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.todoList,
    queryFn: () => getTodoListApi(),
  });
};

/** 할 일 상세정보 요청 쿼리 */
export const useGetTodoDetailQuery = (todoId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.todoDetail(todoId),
    queryFn: () => getTodoDetailApi(todoId),
  });
};

/** 할 일 추가 뮤테이트 */
export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTodo: string) => addTodoApi(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todoList,
      });
    },
  });
};

/** 할 일 삭제 뮤테이트 */
export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todoId: number) => deleteTodoApi(todoId),
    onSuccess: async () =>
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todoList,
      }),
  });
};

/** 할 일 수정 뮤테이트 */
export const usePatchTodoDetailMutation = (todoId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updateTodoData: Partial<TodoType>) =>
      patchTodoDetailApi(todoId, updateTodoData),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.todoList,
        }),
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.todoDetail(todoId),
        }),
      ]);
    },
  });
};

/** 할 일 완료 상태 변경 커스텀 훅 */
export const useHandleComplete = (id: number) => {
  const { mutate: patchTodoDetailMutate } = usePatchTodoDetailMutation(id);
  return (isCompleted: boolean) =>
    patchTodoDetailMutate({ isCompleted: !isCompleted });
};
