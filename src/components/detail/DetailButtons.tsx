'use client';

import { uploadImageApi } from '@/src/apis';
import {
  useDeleteTodoMutation,
  usePatchTodoMutation,
} from '@/src/hooks/tanstack';
import { handleDeleteTodo } from '@/src/services';
import { useRouter } from 'next/navigation';
import type { TodoType } from '@/src/types';

interface DetailButtonsProps {
  todoId: number;
  todoData: TodoType;
  titleInput: string | null;
  imageInput: File | null;
  memoInput: string | null;
}

const DetailButtons = ({
  todoId,
  todoData,
  titleInput,
  imageInput,
  memoInput,
}: DetailButtonsProps) => {
  const router = useRouter();

  const { mutate: updateTodoMutate } = usePatchTodoMutation(todoId);
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation(todoId);

  const isTitleChanged = titleInput !== null && titleInput !== todoData.name;
  const isMemoChanged = memoInput !== null && memoInput !== todoData.memo;
  const isUpdated = isTitleChanged || isMemoChanged;

  const handleUpdateTodo = async () => {
    if (!isUpdated) return;

    if (!confirm('수정하시겠습니까?')) {
      alert('수정을 취소했습니다.');
      return;
    }

    const memo = isMemoChanged ? memoInput : undefined;
    const name = isTitleChanged ? titleInput : undefined;
    const imageUrl = imageInput ? await uploadImageApi(imageInput) : undefined;

    updateTodoMutate({
      name,
      memo,
      imageUrl,
    });
  };

  return (
    <div>
      <button onClick={handleUpdateTodo} disabled={!isUpdated}>
        <img
          src={
            isUpdated
              ? '/icons/edit_button_active.svg'
              : '/icons/edit_button_inactive.svg'
          }
          alt='edit button'
        />
      </button>

      <button onClick={() => handleDeleteTodo(deleteTodoMutate, router)}>
        <img src='/icons/delete_button.svg' alt='delete button' />
      </button>
    </div>
  );
};

export default DetailButtons;
