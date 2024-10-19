export const fetchSchedule = async (
  apiKey: string,
  totalHours: string,
  messageContent: string,
  retries: number = 3,
  delay: number = 2000
): Promise<string> => {
  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `총 ${totalHours}시간 동안 다음과 같이 과목별로 공부 시간을 배분했습니다: ${messageContent}. 이 정보를 기반으로 시간표를 만들어줘.`,
          },
        ],
        max_tokens: 100,
      }),
    });

    if (!result.ok) {
      if (result.status === 429 && retries > 0) {
        console.warn("429 에러: 재시도 중...");
        await new Promise((resolve) => setTimeout(resolve, delay)); // 대기 후 재시도
        return fetchSchedule(
          apiKey,
          totalHours,
          messageContent,
          retries - 1,
          delay * 2
        ); // 재시도
      } else {
        throw new Error(`Error: ${result.status} ${result.statusText}`);
      }
    }

    const data = await result.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("일정을 생성하는 중 오류 발생:", error);
    throw error;
  }
};
