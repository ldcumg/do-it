import type { TodoType } from '@/src/types';

interface MemoPartProps {
  todoData: TodoType;
  memoInput: string | null;
  setMemoInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const MemoPart = ({ todoData, memoInput, setMemoInput }: MemoPartProps) => {
  return (
    <span className='flex flex-col w-full bg-[url("/images/memo.svg")] bg-cover bg-center h-[311px] rounded-[24px] items-center gap-[16px] px-[16px] py-[24px]'>
      <h2 className='text-amber-800 text-[16px] font-extrabold'>Memo</h2>
      <div className='w-full max-h-full min-h-0 flex-1 flex justify-center items-center'>
        <textarea
          className='w-full max-h-full min-h-0 overflow-auto text-center resize-none '
          value={memoInput ?? todoData.memo}
          onChange={(e) => setMemoInput(e.target.value)}
          rows={1}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto';

            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        />
      </div>
    </span>
  );
};

export default MemoPart;
