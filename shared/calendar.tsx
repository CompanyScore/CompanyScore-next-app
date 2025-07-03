// components/shared/Calendar.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export const Calendar = ({ label, value, onChange }: CalendarProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <p>{label}</p>}
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        className="border px-2 py-1 rounded"
      />
    </div>
  );
};
