'use client';

import type { TodoType } from '../../types';
import { patchTodoDetailApi } from '../../apis';

const TodoDetailCheckbox = ({ id, name, isCompleted }: TodoType) => {
  const handleCompleteTodo = async () =>
    patchTodoDetailApi(id, { isCompleted: !isCompleted });

  return (
    <button className='cursor-pointer' onClick={handleCompleteTodo}>
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
