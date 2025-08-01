import { FaStar } from 'react-icons/fa';
import classNames from 'classnames';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export function StarRating({ value, onChange }: Props) {
  return (
    <div className="flex gap-1">
      {[0, 250, 500, 750, 1000].map(star => (
        <button
          key={star}
          onClick={() => onChange(star)}
          className={classNames('text-3xl', {
            'text-yellow-400': star <= value,
            'text-gray-400': star > value,
          })}
        >
          <FaStar className="w-8 h-8" />
        </button>
      ))}
    </div>
  );
}
