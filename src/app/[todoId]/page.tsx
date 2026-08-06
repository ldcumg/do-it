import DetailButtons from '@/src/components/detail/DetailButtons';
import { use } from 'react';
import DetailBody from '@/src/components/detail/DetailBody';

interface DetailPageProps {
  params: Promise<{
    todoId: string;
  }>;
}

const DetailPage = ({ params }: DetailPageProps) => {
  const todoId = Number(use(params).todoId);

  return (
    <section>
      <DetailBody todoId={todoId} />
      <DetailButtons todoId={todoId} />
    </section>
  );
};

export default DetailPage;
