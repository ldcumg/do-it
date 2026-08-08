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
    <form
      className='flex w-full h-[56px] justify-between gap-[8px] sm:gap-[16px]'
      onSubmit={(e) => addTodo(e)}
    >
      <input
        className='bg-[url("/images/input.svg")] w-full h-full bg-no-repeat'
        onChange={(e) => setTodoInputValue(e.target.value)}
        value={todoInputValue}
        type='text'
        placeholder='할 일을 입력해주세요'
      />

      <button type='submit'>
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/icons/add_button_inactive_l.svg'
          />
          <img src='/icons/add_button_inactive_s.svg' alt='add_button' />
        </picture>
      </button>
    </form>
  );
};

export default InputForm;
