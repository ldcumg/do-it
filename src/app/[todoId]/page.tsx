import { getTodoDetailApi } from '@/src/apis';
import DetailBody from '@/src/components/detail/DetailBody';
import DetailButtons from '@/src/components/detail/DetailButtons';
import TodoDetailCheckbox from '@/src/components/detail/TodoDetailCheckbox';

interface DetailPageProps {
  params: Promise<{
    todoId: string;
  }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const todoId = Number((await params).todoId);
  const todoData = await getTodoDetailApi(todoId);
  console.log('[ ㏒ ] todoData =>', todoData);

  return (
    <div>
      <TodoDetailCheckbox {...todoData} />
      <DetailBody todoData={todoData} />
      <DetailButtons todoId={todoId} />
    </div>
  );
};

export default DetailPage;
