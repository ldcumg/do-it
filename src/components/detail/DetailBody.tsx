'use client';

import TodoDetailCheckbox from './TodoDetailCheckbox';
import Supplement from './Supplement';
import type { TodoType } from '@/src/types';

interface DetailBodyProps {
  todoData: TodoType;
  titleInput: string | null;
  setTitleInput: React.Dispatch<React.SetStateAction<string | null>>;
  imageInput: File | null;
  setImageInput: React.Dispatch<React.SetStateAction<File | null>>;
  memoInput: string | null;
  setMemoInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const DetailBody = ({
  todoData,
  titleInput,
  setTitleInput,
  imageInput,
  setImageInput,
  memoInput,
  setMemoInput,
}: DetailBodyProps) => {
  return (
    <>
      <TodoDetailCheckbox
        {...todoData}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
      />
      <Supplement
        todoData={todoData}
        imageInput={imageInput}
        setImageInput={setImageInput}
        memoInput={memoInput}
        setMemoInput={setMemoInput}
      />
    </>
  );
};

export default DetailBody;
