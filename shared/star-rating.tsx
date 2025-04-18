import { FaStar } from "react-icons/fa";
import classNames from "classnames";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export function StarRating({ value, onChange }: Props) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          className={classNames("text-3xl", {
            "text-yellow-400": star <= value,
            "text-gray-400": star > value,
          })}
        >
          <FaStar />
        </button>
      ))}
    </div>
  );
}
