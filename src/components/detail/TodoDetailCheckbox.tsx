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
    <button onClick={() => handleComplete(isCompleted)}>
      <img
        src={
          isCompleted ? '/icons/check_circle.svg' : '/icons/uncheck_circle.svg'
        }
        alt='check circle'
      />
      <input
        className={`${isCompleted ? 'line-through' : ''}`}
        type='text'
        value={titleInput ?? name}
        onChange={(e) => setTitleInput(e.target.value)}
      />
    </button>
  );
};

export default TodoDetailCheckbox;
