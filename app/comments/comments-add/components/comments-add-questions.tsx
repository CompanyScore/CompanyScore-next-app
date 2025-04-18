import { Tabs } from "@/shared";
import { Tab1, Tab2, Tab3, Tab4, Tab5 } from "./tabs";
import { useCommentFormStore } from "@/store";

export const CommentsAddQuestions = () => {
  const { form, updateForm } = useCommentFormStore();

  return (
    <Tabs>
      {form.task.isTask && (
        <Tab1
          task={form.task.rating}
          setTask={(val) => updateForm({ task: { ...form.task, rating: val } })}
        />
      )}

      {form.interview.isInterview && (
        <Tab2
          interview={form.interview.rating}
          setInterview={(val) =>
            updateForm({ interview: { ...form.interview, rating: val } })
          }
        />
      )}

      {form.work.isWork && (
        <Tab3
          management={form.work.management}
          team={form.work.team}
          project={form.work.project}
          stack={form.work.stack}
          workFormat={form.work.workFormat}
          setManagement={(val) =>
            updateForm({ work: { ...form.work, management: val } })
          }
          setTeam={(val) => updateForm({ work: { ...form.work, team: val } })}
          setProject={(val) =>
            updateForm({ work: { ...form.work, project: val } })
          }
          setStack={(val) => updateForm({ work: { ...form.work, stack: val } })}
          setWorkFormat={(val) =>
            updateForm({ work: { ...form.work, workFormat: val } })
          }
        />
      )}

      {form.work.isWork && (
        <Tab4
          salary={form.work.salary}
          premium={form.work.premium}
          bonuses={form.work.bonuses}
          stocks={form.work.stocks}
          dividends={form.work.dividends}
          setSalary={(val) =>
            updateForm({ work: { ...form.work, salary: val } })
          }
          setPremium={(val) =>
            updateForm({ work: { ...form.work, premium: val } })
          }
          setBonuses={(val) =>
            updateForm({ work: { ...form.work, bonuses: val } })
          }
          setStocks={(val) =>
            updateForm({ work: { ...form.work, stocks: val } })
          }
          setDividends={(val) =>
            updateForm({ work: { ...form.work, dividends: val } })
          }
        />
      )}

      <Tab5
        reasonJoined={form.work.reasonJoined}
        setReasonJoined={(val) =>
          updateForm({ work: { ...form.work, reasonJoined: val } })
        }
        reasonLeft={form.work.reasonLeft}
        setReasonLeft={(val) =>
          updateForm({ work: { ...form.work, reasonLeft: val } })
        }
        recommendation={form.work.recommendation}
        setRecommendation={(val) =>
          updateForm({ work: { ...form.work, recommendation: val } })
        }
      />
    </Tabs>
  );
};
