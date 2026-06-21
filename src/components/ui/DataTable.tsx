import { ReactNode } from "react";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
}

export default function DataTable<T extends object>({ columns, data, caption }: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
      <table className="w-full text-sm">
        {caption && (
          <caption className="px-6 py-4 text-left text-[10px] text-zinc-600 uppercase tracking-widest font-bold border-b border-zinc-800 caption-top">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-zinc-800">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/50 transition-all">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-6 py-4 text-zinc-300">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
