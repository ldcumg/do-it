'use client';

import Link from 'next/link';
import type { TodoType } from '../types';
import { patchTodoDetailApi } from '../apis';

const TodoCheckbox = ({ id, name, isCompleted }: TodoType) => {
  //TODO - tanstack query 적용
  const handleCompleteTodo = async () =>
    patchTodoDetailApi(id, { isCompleted: !isCompleted });

  return (
    <li>
      <button className='cursor-pointer' onClick={handleCompleteTodo}>
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
