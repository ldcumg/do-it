'use client';

import { useDeleteTodoMutation } from '@/src/hooks/tanstack';
import { useRouter } from 'next/navigation';

interface DetailButtonsProps {
  todoId: number;
}

const DetailButtons = ({ todoId }: DetailButtonsProps) => {
  const router = useRouter();
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();

  const handleDeleteTodo = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteTodoMutate(todoId);
      router.replace('/');
      return;
    }
    alert('삭제가 취소되었습니다.');
  };

  return (
    <div>
      <button className='cursor-pointer'>
        <img src='/svgs/edit_button_inactive.svg' alt='edit button inactive' />
      </button>
      <button className='cursor-pointer' onClick={handleDeleteTodo}>
        <img src='/svgs/delete_button.svg' alt='delete button' />
      </button>
    </div>
  );
};

export default DetailButtons;
