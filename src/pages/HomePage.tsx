import React, { useState } from 'react'
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
const HomePage: React.FC = () => {
  const todayDate = dayjs();
  const [date, setDate] = useState<dayjs.Dayjs>(
    todayDate
  );
  const onChange: DatePickerProps["onChange"] = (dateValue: dayjs.Dayjs): void => {
    setDate(dateValue ?? undefined);
  }

  return (
    <div>
      <DatePicker onChange={onChange} picker='date' />
      <p>you had selected {date?.format('YYYY-MM-DD')}</p>
    </div>
  )
}

export default HomePage
