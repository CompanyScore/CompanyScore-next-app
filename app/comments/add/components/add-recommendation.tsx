import { useCommentForm } from '@/store/form';
import { Radio } from '@/shared';
import { Title } from '@/shared/ui';

export const AddRecommendation = () => {
  const { commentForm, updateCommentForm } = useCommentForm();

  return (
    <div className="flex flex-col gap-6 m-auto max-w-[900px] w-full">
      <Title>Ваши впечатления о компании</Title>
      <div className="flex flex-col gap-4">
        <div>Рекомендуете ли вы эту компанию другим?</div>
        <Radio
          options={[
            { label: 'Нет', value: 0 },
            { label: 'Не уверен', value: 500 },
            { label: 'Да', value: 1000 },
          ]}
          selectedValue={commentForm.isRecommended}
          onChange={value =>
            updateCommentForm({
              ...commentForm,
              isRecommended: Number(value),
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
            value={commentForm.reasonJoined}
            onChange={e =>
              updateCommentForm({
                ...commentForm,
                reasonJoined: e.target.value,
              })
            }
          />

          <h3>Что, по вашему мнению, можно улучшить в этой компании?</h3>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Ваш ответ..."
            value={commentForm.reasonLeft}
            onChange={e =>
              updateCommentForm({
                ...commentForm,
                reasonLeft: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
