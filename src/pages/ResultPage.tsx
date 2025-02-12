import { Layout } from '@/components/frame';
import mockData from '@/assets/mock/data.json';

const ResultPage = () => {
  const wiseSaying = [
    '⏳ 버티자, 견디자',
    '🎯 시작이 반',
    '💡 하다 보면 되겠지',
    '🚀 일단 해보자',
    '✅ 결국 언젠가 해낸다',
  ];

  // const wiseSaying = [
  //   '🚶‍♂️ 오늘 걷지 않으면, 내일은 뛰어야 한다. 🏃‍♂️',
  //   '🌱 어제보다 나은 오늘을 만들기 위해 노력하자.',
  //   '📌 실패란 넘어지는 것이 아닌, 다시 일어나지 않는 것',
  //   '🚀 미래를 결정짓는 것은 지금',
  // ];

  return (
    <Layout use='result'>
      <div className='flex flex-col justify-center bg-two'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1  gap-4 text-base md:text-xl bg-blue rounded-t-xl p-5'>
          {/* 과목 */}
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
          {/* 명언 */}
          <div className='flex flex-col gap-2 bg-four rounded-xl p-8'>
            <h3 className='text-base md:text-xl text-ef font-semibold'>명언</h3>
            <div className='flex flex-col'>
              {wiseSaying.map((sentence: string) => (
                <span
                  key={sentence}
                  className='text-sm md:text-base text-dd  break-keep'
                >
                  {sentence}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 피드백 */}
        <div className='bg-blue p-5 flex flex-col gap-8'>
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
          <div className='flex flex-col gap-2 bg-green rounded-xl p-8'>
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
