'use client';

import TodoDetailCheckbox from './TodoDetailCheckbox';
import Supplement from './Supplement';
import { useGetTodoDetailQuery } from '@/src/hooks/tanstack';

interface DetailBodyProps {
  todoId: number;
}

const DetailBody = ({todoId}: DetailBodyProps) => {
  const {
    data: todoData,
    isPending,
    isError,
    error,
  } = useGetTodoDetailQuery(todoId);
  console.log('[ ㏒ ] todoData =>', todoData);

  if (isPending) return <section>할 일 정보를 불러오는 중입니다.</section>;

  if (isError) throw new Error(error.message);
  return (
    <>
      <TodoDetailCheckbox {...todoData} />
      <Supplement todoData={todoData} />
    </>
  );
};

export default DetailBody;
