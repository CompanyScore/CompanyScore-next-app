import { Radio } from "@/shared";
import { Title } from "@/ui";
import { useCommentFormStore } from "@/store";

export const CommentsAddRecommendation = () => {
  const { form, updateForm } = useCommentFormStore();

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Порекомендовали бы вы эту компанию другим?
      </Title>
      <Radio
        options={[
          { label: "Да", value: 1 },
          { label: "Нет", value: 0 },
        ]}
        selectedValue={form.work.recommendation}
        onChange={(value) =>
          updateForm({
            work: { ...form.work, recommendation: Number(value) },
          })
        }
      />

      <Title size="2">Что вам особенно понравилось в этой компании?</Title>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder="Ваш ответ..."
        value={form.work.reasonJoined}
        onChange={(e) =>
          updateForm({
            work: { ...form.work, reasonJoined: e.target.value },
          })
        }
      />

      <Title size="2">
        Что, по вашему мнению, можно улучшить в этой компании?
      </Title>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder="Ваш ответ..."
        value={form.work.reasonLeft}
        onChange={(e) =>
          updateForm({
            work: { ...form.work, reasonLeft: e.target.value },
          })
        }
      />
    </div>
  );
};
