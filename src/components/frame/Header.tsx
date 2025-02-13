import { Goal } from 'lucide-react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='flex gap-4 bg-two p-6 items-end'>
      <Link to='/' className='flex gap-2 items-center'>
        <Goal className='h-auto w-4 md:w-6 text-yellow' />
        <h1 className='text-base md:text-xl font-bold text-ef'>이건 어때?</h1>
      </Link>
      <span className='text-[10px] md:text-sm text-zinc-500'>
        어제보다 나은 오늘을 만드는 작은 실천을 응원합니다.
      </span>
    </div>
  );
};

export { Header };
