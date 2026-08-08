'use client';

import { useHandleComplete } from '@/src/hooks/tanstack';
import type { TodoType } from '../../types';

interface TodoDetailCheckboxProps extends TodoType {
  titleInput: string | null;
  setTitleInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const TodoDetailCheckbox = ({
  id,
  name,
  isCompleted,
  titleInput,
  setTitleInput,
}: TodoDetailCheckboxProps) => {
  const handleComplete = useHandleComplete(id);

  return (
    <label
      className={`${isCompleted ? 'bg-violet-200' : 'bg-white'} h-[64px] flex gap-[16px] items-center justify-center border-2 rounded-[24px] cursor-pointer p-[16px] mb-[17px] sm:mb-[24px] mt-[16px] sm:mt-[24px]`}
      htmlFor='todo-input'
    >
      <button onClick={() => handleComplete(isCompleted)}>
        <img
          src={
            isCompleted
              ? '/icons/check_circle.svg'
              : '/icons/uncheck_circle.svg'
          }
          alt='check circle'
        />
      </button>
      <input
        id='todo-input'
        className='underline text-slate-900 font-bold text-[20px] w-[100px]'
        type='text'
        value={titleInput ?? name}
        onChange={(e) => setTitleInput(e.target.value)}
      />
    </label>
  );
};

export default TodoDetailCheckbox;
