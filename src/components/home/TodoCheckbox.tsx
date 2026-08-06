'use client';

import Link from 'next/link';
import type { TodoType } from '../../types';
import { useHandleComplete } from '@/src/hooks/tanstack';

const TodoCheckbox = ({ id, name, isCompleted }: TodoType) => {
  const handleComplete = useHandleComplete(id);

  return (
    <li>
      <button
        className='cursor-pointer'
        onClick={() => handleComplete(isCompleted)}
      >
        {isCompleted ? (
          <img src='/svgs/check_circle.svg' alt='check circle' />
        ) : (
          <img src='/svgs/uncheck_circle.svg' alt='uncheck circle' />
        )}
      </button>
      <Link href={`/${id}`}>
        <span className={`${isCompleted ? 'line-through' : ''}`}>{name}</span>
      </Link>
    </li>
  );
};

export default TodoCheckbox;
