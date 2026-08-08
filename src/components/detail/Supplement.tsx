'use client';

import type { TodoType } from '@/src/types';
import ImagePart from './ImagePart';
import MemoPart from './MemoPart';

interface SupplementProps {
  todoData: TodoType;
  imageInput: File | null;
  setImageInput: React.Dispatch<React.SetStateAction<File | null>>;
  memoInput: string | null;
  setMemoInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const Supplement = ({
  todoData,
  imageInput,
  setImageInput,
  memoInput,
  setMemoInput,
}: SupplementProps) => {
  return (
    <div className='flex flex-col lg:flex-row gap-[15px] sm:gap-[24px]'>
      <ImagePart
        todoData={todoData}
        imageInput={imageInput}
        setImageInput={setImageInput}
      />

      <MemoPart
        todoData={todoData}
        memoInput={memoInput}
        setMemoInput={setMemoInput}
      />
    </div>
  );
};

export default Supplement;
