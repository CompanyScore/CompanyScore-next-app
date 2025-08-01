import React from 'react';

interface Column<T> {
  key: string;
  title: string;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T extends Record<string, any>> {
  columns: Column<T>[];
  data: T[];
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table max-w-[650px]:table-xs">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            {columns.map(col => (
              <th key={col.key} className="px-2">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center border-b border-gray-500">
              {columns.map(col => (
                <td key={col.key} className="px-0">
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
