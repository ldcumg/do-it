import type { UseMutateFunction } from '@tanstack/react-query';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleDeleteTodo = (
  deleteTodoMutate: UseMutateFunction<void, Error, void, unknown>,
  router: AppRouterInstance,
) => {
  if (!confirm('삭제하시겠습니까?')) {
    alert('삭제가 취소되었습니다.');
    return;
  }

  deleteTodoMutate();
  router.replace('/');
};
