import { Radio } from '@/shared';
import { Title } from '@/ui';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddRecommendation = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6">
      <Title size="3">Ваши впечатления о компании</Title>
      <div>
        Расскажите о плюсах и минусах, и порекомендовали бы вы компанию другим
      </div>
      <div className="flex gap-20">
        <Title size="2">Плюсы и минусы</Title>
        <div className="flex flex-col gap-4">
          <Title size="2">Что вам особенно понравилось в этой компании?</Title>
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

          <Title size="2">
            Что, по вашему мнению, можно улучшить в этой компании?
          </Title>
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

      <div className="divider"></div>

      <div className="flex gap-20 items-end">
        <Title size="2">Рекомендация</Title>
        <div>Посоветовали бы вы компанию другим?</div>
        <Radio
          options={[
            { label: 'Да', value: 5 },
            { label: 'Не уверен', value: 2 },
            { label: 'Нет', value: 0 },
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
    </div>
  );
};
