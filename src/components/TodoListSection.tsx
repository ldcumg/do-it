import { getTodoListApi } from '../apis';
import CompletedTodos from './CompletedTodos';
import IncompletedTodos from './IncompletedTodos';

const TodoListSection = async () => {
  const todoList = await getTodoListApi();
  console.log('[ ㏒ ] todoList =>', todoList);

  return (
    <section>
      <IncompletedTodos />
      <CompletedTodos />
    </section>
  );
};

export default TodoListSection;
