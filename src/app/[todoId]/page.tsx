import { getTodoDetailApi } from '@/src/apis';
import TodoDetailCheckbox from '@/src/components/DetailCheckbox';

interface DetailPageProps {
  params: Promise<{
    todoId: string;
  }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { todoId } = await params;
  const todoData = await getTodoDetailApi(Number(todoId));
  console.log('[ ㏒ ] todoData =>', todoData);
  return (
    <div>
      <TodoDetailCheckbox {...todoData} />
      <div className='flex'>
        <span>
          {todoData.imageUrl ? (
            <>
              <img src={todoData.imageUrl} alt='todo image' />
              <img src='/svgs/edit_circle.svg' alt='edit circle' />
            </>
          ) : (
            <>
              <img src='/svgs/empty_image.svg' alt='empty image' />
              <img src='/svgs/plus_circle.svg' alt='plus circle' />
            </>
          )}
        </span>
        <span className='bg-[url("/svgs/memo.svg")] bg-cover bg-center'>
          <h2>Memo</h2>
          <span>{todoData.memo}</span>
        </span>
      </div>

      <div>
        <button>
          <img
            src='/svgs/edit_button_inactive.svg'
            alt='edit button inactive'
          />
        </button>
        <button>
          <img src='/svgs/delete_button.svg' alt='delete button' />
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
