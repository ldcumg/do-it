'use client';

import type { TodoType } from '@/src/types';

interface DetailBodyProps {
  todoData: TodoType;
}

const DetailBody = ({ todoData }: DetailBodyProps) => {
  return (
    <div className='flex'>
      <span>
        {todoData.imageUrl ? (
          <>
            <img src={todoData.imageUrl} alt='todo image' />
            <img src='/svgs/edit_circle.svg' alt='edit circle' />
          </>
        ) : (
          <>
            <img src='/svgs/empty_image.svg' alt='empty image' />
            <img src='/svgs/plus_circle.svg' alt='plus circle' />
          </>
        )}
      </span>
      <span className='bg-[url("/svgs/memo.svg")] bg-cover bg-center'>
        <h2>Memo</h2>
        <span>{todoData.memo}</span>
      </span>
    </div>
  );
};

export default DetailBody;
