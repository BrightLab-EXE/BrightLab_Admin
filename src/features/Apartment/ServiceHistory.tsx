import CustomDatePicker from "@/components/DateTimePicker";
import Image from "next/image";
import React from "react";
import Product from "./Product";

const ServiceHistory = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-32">
        <div className="flex gap-3 h-max">
          <div className="px-3.5 py-2.5 bg-[#FFE5D4] text-[#FFA170] rounded-md text-sm cursor-pointer">
            Tháng
          </div>
          <div className="px-3.5 py-2.5 bg-[#FFE5D4] text-[#FFA170] rounded-md text-sm cursor-pointer">
            Năm
          </div>
          <div className="px-3.5 py-2.5 bg-[#FFC8A8] text-[#FF4E18] rounded-md text-sm cursor-pointer">
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
