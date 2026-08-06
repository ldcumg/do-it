'use client';

import { useHandleComplete } from '@/src/hooks/tanstack';
import type { TodoType } from '../../types';

const TodoDetailCheckbox = ({ id, name, isCompleted }: TodoType) => {
  const handleComplete = useHandleComplete(id);
  
  return (
    <button
      className='cursor-pointer'
      onClick={() => handleComplete(isCompleted)}
    >
      {isCompleted ? (
        <img src='/svgs/check_circle.svg' alt='check circle' />
      ) : (
        <img src='/svgs/uncheck_circle.svg' alt='uncheck circle' />
      )}
      <h1 className={`${isCompleted ? 'line-through' : ''}`}>{name}</h1>
    </button>
  );
};

export default TodoDetailCheckbox;
