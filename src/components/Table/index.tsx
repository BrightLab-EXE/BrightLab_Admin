/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import React from "react";

const Table = ({
  column,
  items,
  className,
}: {
  column: {
    name: string;
    className?: string;
    renderItem: (item: any) => React.ReactElement;
  }[];
  items: any[];
  className?: string;
}) => {
  return (
    <div className="w-full bg-[#FFF4ED] p-6 rounded-2xl">
      <table className={clsx(className, "w-full")}>
        <thead className="w-full">
          <tr>
            {column.map((col) => (
              <th
                key={col.name}
                className={clsx(col.className, "text-[#FF4E18] py-4")}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx + "-" + "tr"} className="border-t border-[#FFE5D4]">
              {column.map((col, index) => (
                <td
                  key={index + "-" + col.name}
                  className={clsx(
                    col.className,
                    "text-[#450805] text-center text-sm py-4"
                  )}
                >
                  {col.renderItem(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
