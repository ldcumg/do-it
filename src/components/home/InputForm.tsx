'use client';

import { useState } from 'react';
import { addTodoApi } from '../../apis';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const addTodo = async (
    e: React.SubmitEvent<HTMLFormElement>,
    newTodo: string,
  ) => {
    e.preventDefault();
    await addTodoApi(newTodo);
  };

  return (
    <form className='flex' onSubmit={(e) => addTodo(e, inputValue)}>
      <div>
        {/* <img src='/svgs/input.svg' alt='input' /> */}
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type='text'
          placeholder='할 일을 입력해주세요'
        />
      </div>

      <button>
        <img src='/svgs/add_button_inactive_l.svg' alt='add_button' />
      </button>
    </form>
  );
};

export default InputForm;
