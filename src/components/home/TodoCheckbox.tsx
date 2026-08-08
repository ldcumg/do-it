'use client';

import Link from 'next/link';
import type { TodoType } from '../../types';
import { useHandleComplete } from '@/src/hooks/tanstack';

const TodoCheckbox = ({ id, name, isCompleted }: TodoType) => {
  const handleComplete = useHandleComplete(id);

  return (
    <li
      className={`border-2 rounded-[27px] flex items-center h-[48px] w-full px-[12px] py-[9px] ${isCompleted ? 'bg-violet-100' : 'bg-white'}`}
    >
      <button className='mr-[16px]' onClick={() => handleComplete(isCompleted)}>
        {isCompleted ? (
          <img src='/icons/check_circle.svg' alt='check circle' />
        ) : (
          <img src='/icons/uncheck_circle.svg' alt='uncheck circle' />
        )}
      </button>
      <Link href={`/${id}`}>
        <span className={`${isCompleted ? 'line-through' : ''}`}>{name}</span>
      </Link>
    </li>
  );
};

export default TodoCheckbox;
