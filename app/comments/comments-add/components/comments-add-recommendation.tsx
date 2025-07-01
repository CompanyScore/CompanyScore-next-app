import { Radio } from '@/shared';
import { Title } from '@/ui';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddRecommendation = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 m-auto max-w-[900px] w-full">
      <Title>Ваши впечатления о компании</Title>
      <div className="flex flex-col gap-4">
        <div>Рекомендуете ли вы эту компанию другим?</div>
        <Radio
          options={[
            { label: 'Нет', value: 0 },
            { label: 'Не уверен', value: 2 },
            { label: 'Да', value: 5 },
          ]}
          selectedValue={form.recommendation.isRecommended}
          onChange={value =>
            updateForm({
              recommendation: {
                ...form.recommendation,
                isRecommended: Number(value),
              },
            })
          }
        />
      </div>

      <div className="divider before:bg-black after:bg-black"></div>

      <div className="flex gap-20">
        <div className="flex flex-col gap-4 w-full">
          <h3>Что вам особенно понравилось в этой компании?</h3>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Ваш ответ..."
            value={form.recommendation.reasonJoined}
            onChange={e =>
              updateForm({
                recommendation: {
                  ...form.recommendation,
                  reasonJoined: e.target.value,
                },
              })
            }
          />

          <h3>Что, по вашему мнению, можно улучшить в этой компании?</h3>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Ваш ответ..."
            value={form.recommendation.reasonLeft}
            onChange={e =>
              updateForm({
                recommendation: {
                  ...form.recommendation,
                  reasonLeft: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
