import { Checkbox, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore } from '@/store';

export const CommentsAddInterview = () => {
  const { form, updateForm } = useCommentFormStore();

  const handleCheckboxChange = () => {
    updateForm({
      interview: {
        ...form.interview,
        isInterview: !form.interview.isInterview,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Вы проходили собеседование?
      </Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <Checkbox
          label="Я проходил собеседование"
          value="interview"
          selected={form.interview.isInterview}
          onChange={handleCheckboxChange}
        />

        {form.interview.isInterview && (
          <>
            <StarRating
              value={form.interview.rating}
              onChange={val =>
                updateForm({ interview: { ...form.interview, rating: val } })
              }
            />
            <textarea
              className="textarea textarea-primary w-full"
              placeholder="Поделитесь опытом собеседования"
              value={form.interview.text}
              onChange={e =>
                updateForm({
                  interview: { ...form.interview, text: e.target.value },
                })
              }
            />
          </>
        )}
      </div>
    </div>
  );
};
