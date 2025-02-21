import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"; // Tạo file CSS tùy chỉnh

type CustomInputProps = {
  date: Date;
  onClick?: () => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handlePrevMonth = () => {
    if (selectedDate) {
      const prevMonth = new Date(selectedDate);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      setSelectedDate(prevMonth);
    }
  };

  const handleNextMonth = () => {
    if (selectedDate) {
      const nextMonth = new Date(selectedDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setSelectedDate(nextMonth);
    }
  };

  return (
    <div className="datepicker-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        customInput={
          selectedDate ? (
            <CustomInput
              date={selectedDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
          ) : (
            <></>
          )
        }
      />
    </div>
  );
};

const CustomInput: React.FC<CustomInputProps> = ({
  date,
  onClick,
  onPrevMonth,
  onNextMonth,
}) => (
  <div className="custom-input gap-40" onClick={onClick}>
    <button className="nav-button" onClick={onPrevMonth}>
      &#8249;
    </button>
    <span className="cursor-pointer">
      Tháng {date.toLocaleDateString("vi-VN", { month: "2-digit" })}{" "}
      {date.getFullYear()}
    </span>
    <button className="nav-button" onClick={onNextMonth}>
      &#8250;
    </button>
  </div>
);

export default CustomDatePicker;
