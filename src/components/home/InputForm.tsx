'use client';

import { useState } from 'react';
import { useAddTodoMutation } from '@/src/hooks/tanstack';

const InputForm = () => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const addTodo = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoInputValue) {
      alert('할 일을 입력해주세요');
      return;
    }
    addTodoMutate(todoInputValue);
    setTodoInputValue('');
  };

  return (
    <form className='flex' onSubmit={(e) => addTodo(e)}>
      <div>
        {/* <img src='/icons/input.svg' alt='input' /> */}
        <input
          onChange={(e) => setTodoInputValue(e.target.value)}
          value={todoInputValue}
          type='text'
          placeholder='할 일을 입력해주세요'
        />
      </div>

      <button>
        <img src='/icons/add_button_inactive_l.svg' alt='add_button' />
      </button>
    </form>
  );
};

export default InputForm;
