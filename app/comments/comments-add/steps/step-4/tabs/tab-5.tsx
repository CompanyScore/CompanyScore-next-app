import { Radio, Tab } from "@/shared";
import { Title } from "@/ui";

type Props = {
  reasonJoined: string;
  setReasonJoined: (value: string) => void;
  reasonLeft: string;
  setReasonLeft: (value: string) => void;
  recommendation: string;
  setRecommendation: (value: string) => void;
  onSubmit: () => void; // добавляем onSubmit
};

export const Tab5 = ({
  reasonJoined,
  setReasonJoined,
  reasonLeft,
  setReasonLeft,
  recommendation,
  setRecommendation,
  onSubmit, // получаем onSubmit
}: Props) => {
  return (
    <Tab name="comment-add" label="Обратная связь">
      <div className="flex flex-col gap-6">
        <Title size="3">По какой причине вы устроились на эту работу?</Title>
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Ваш ответ..."
          value={reasonJoined}
          onChange={(e) => setReasonJoined(e.target.value)}
        />

        <Title size="3">Почему вы уволились с работы?</Title>
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Ваш ответ..."
          value={reasonLeft}
          onChange={(e) => setReasonLeft(e.target.value)}
        />

        <Title size="3">Рекомендуете эту компанию?</Title>
        <Radio
          options={[
            { label: "Да", value: "yes" },
            { label: "Нет", value: "no" },
          ]}
          selectedValue={recommendation}
          onChange={(value) => setRecommendation(String(value))}
        />

        <div className="flex justify-end mt-4">
          <button onClick={onSubmit} className="btn btn-primary">
            Отправить
          </button>
        </div>
      </div>
    </Tab>
  );
};
