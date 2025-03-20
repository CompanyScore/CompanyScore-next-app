import { Radio, Tab } from "@/shared";
import { Title } from "@/ui";

type Props = {
  reasonJoined: string;
  setReasonJoined: (value: string) => void;
  reasonLeft: string;
  setReasonLeft: (value: string) => void;
  recommendation: string;
  setRecommendation: (value: string) => void;
};

export const Tab5 = ({
  reasonJoined,
  setReasonJoined,
  reasonLeft,
  setReasonLeft,
  recommendation,
  setRecommendation,
}: Props) => {
  return (
    <Tab name="comment-add" label="Обратная связь">
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
        onChange={setRecommendation}
      />
    </Tab>
  );
};
