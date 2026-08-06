import type { TodoType } from '@/src/types';

interface MemoPartProps {
  todoData: TodoType;
  memoInput: string | null;
  setMemoInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const MemoPart = ({ todoData, memoInput, setMemoInput }: MemoPartProps) => {
  return (
    <span className='bg-[url("/images/memo.svg")] bg-cover bg-center'>
      <h2>Memo</h2>
      <textarea
        value={memoInput ?? todoData.memo}
        onChange={(e) => setMemoInput(e.target.value)}
      />
    </span>
  );
};

export default MemoPart;
