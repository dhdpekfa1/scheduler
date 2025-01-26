import { z } from 'zod';

export const FormSchema = z.object({
  goal: z.string().min(1, { message: '최종 목표는 필수 입력사항입니다.' }),
  description: z.string().optional(),
  subjects: z
    .array(
      z.object({
        value: z.string().min(1, { message: '과목 이름을 입력해주세요.' }),
      })
    )
    .min(1, { message: '최소 하나 이상의 학습 과목이 필요합니다.' }),
});
