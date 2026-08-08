'use client';

import Link from 'next/link';
import type { TodoType } from '../../types';
import { useHandleComplete } from '@/src/hooks/tanstack';

const TodoCheckbox = ({ id, name, isCompleted }: TodoType) => {
  const handleComplete = useHandleComplete(id);

  return (
    <Link href={`/${id}`}>
      <li
        className={`border-2 rounded-[27px] flex items-center h-[48px] w-full px-[12px] py-[9px] ${isCompleted ? 'bg-violet-100' : 'bg-white'}`}
      >
        <button
          className='mr-[16px]'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleComplete(isCompleted);
          }}
        >
          {isCompleted ? (
            <img src='/icons/check_circle.svg' alt='check circle' />
          ) : (
            <img src='/icons/uncheck_circle.svg' alt='uncheck circle' />
          )}
        </button>
        <span className={`${isCompleted ? 'line-through' : ''}`}>{name}</span>
      </li>
    </Link>
  );
};

export default TodoCheckbox;
