'use client';

import DetailButtons from '@/src/components/detail/DetailButtons';
import { use, useState } from 'react';
import DetailBody from '@/src/components/detail/DetailBody';
import { useGetTodoDetailQuery } from '@/src/hooks/tanstack';

interface DetailPageProps {
  params: Promise<{
    todoId: string;
  }>;
}

const DetailPage = ({ params }: DetailPageProps) => {
  const todoId = Number(use(params).todoId);
  const [titleInput, setTitleInput] = useState<string|null>(null);
  const [imageInput, setImageInput] = useState<File | null>(null);
  const [memoInput, setMemoInput] = useState<string | null>(null);

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
    <section>
      <DetailBody
        todoData={todoData}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        imageInput={imageInput}
        setImageInput={setImageInput}
        memoInput={memoInput}
        setMemoInput={setMemoInput}
      />
      <DetailButtons
        todoId={todoId}
        todoData={todoData}
        titleInput={titleInput}
        imageInput={imageInput}
        memoInput={memoInput}
      />
    </section>
  );
};

export default DetailPage;
