import CustomDatePicker from "@/components/DateTimePicker";
import Image from "next/image";
import React, { useState } from "react";
import Product from "./Product";
import clsx from "clsx";

const ServiceHistory = () => {
  const [period, setPeriod] = useState("week");
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-32">
        <div className="flex gap-3 h-max">
          <div
            className={clsx(
              "px-3.5 py-2.5 rounded-md text-sm cursor-pointer hover:bg-[#FFC8A8] hover:text-[#FF4E18]",
              period === "month"
                ? "bg-[#FFC8A8] text-[#FF4E18]"
                : "bg-[#FFE5D4] text-[#FFA170]"
            )}
            onClick={() => setPeriod("month")}
          >
            Tháng
          </div>
          <div
            className={clsx(
              "px-3.5 py-2.5 rounded-md text-sm cursor-pointer hover:bg-[#FFC8A8] hover:text-[#FF4E18]",
              period === "year"
                ? "bg-[#FFC8A8] text-[#FF4E18]"
                : "bg-[#FFE5D4] text-[#FFA170]"
            )}
            onClick={() => setPeriod("year")}
          >
            Năm
          </div>
          <div
            className={clsx(
              "px-3.5 py-2.5 rounded-md text-sm cursor-pointer hover:bg-[#FFC8A8] hover:text-[#FF4E18]",
              period === "week"
                ? "bg-[#FFC8A8] text-[#FF4E18]"
                : "bg-[#FFE5D4] text-[#FFA170]"
            )}
            onClick={() => setPeriod("week")}
          >
            Tuần
          </div>
        </div>
        <div className="flex justify-between w-full">
          <CustomDatePicker />{" "}
          <Image
            src="/images/calendar-edit.svg"
            width={16}
            height={16}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div className="w-22.5%" key={i + "-[product]"}>
            <Product />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHistory;
