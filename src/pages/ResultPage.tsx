import { Layout } from '@/components/frame';
import mockData from '@/assets/mock/data.json';

const ResultPage = () => {
  const wiseSaying = [
    '⏳ 버티자, 견디자',
    '🎯 시작이 반',
    '💡 하다 보면 되겠지',
    '🚀 일단 기릿',
    '✅ 결국 언젠가 해낸다',
  ];

  return (
    <Layout>
      <div className='flex flex-col justify-center bg-two'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:flex-col-reverse gap-4 text-base md:text-xl bg-four rounded-t-xl p-5'>
          {/* 학습 과목 추천 */}
          <div className='flex flex-col gap-2 bg-yellow rounded-xl p-8'>
            <h3 className='text-base md:text-xl text-four font-semibold'>
              학습 과목 추천
            </h3>
            <div className='flex flex-col'>
              {mockData.priorities.map((subject: string) => (
                <span
                  key={subject}
                  className='text-sm md:text-base text-three break-keep'
                >
                  👉🏻 {subject}
                </span>
              ))}
            </div>
          </div>

          {/* 응원 */}
          <div className='flex flex-col gap-2 bg-two rounded-xl p-8'>
            <div className='flex flex-col'>
              {wiseSaying.map((sentence: string) => (
                <span
                  key={sentence}
                  className='text-sm md:text-base text-ef font-semibold break-keep'
                >
                  {sentence}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 피드백 */}
        <div className='bg-four p-5 flex flex-col gap-8'>
          <div className='flex flex-col gap-2 bg-pink rounded-xl p-8'>
            <h3 className='text-base md:text-xl text-four font-semibold'>
              피드백
            </h3>
            <div className='flex flex-col'>
              <span className='text-sm md:text-base text-three break-keep'>
                {mockData.feedback}
              </span>
            </div>
          </div>
          {/* 설명 */}
          <div className='flex flex-col gap-2 bg-blue rounded-xl p-8'>
            <h3 className='text-base md:text-xl text-four font-semibold'>
              전반적인 설명
            </h3>
            <div className='flex flex-col'>
              <span className='text-sm md:text-base text-three break-keep'>
                {mockData.explain}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { ResultPage };
