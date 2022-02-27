import { useState } from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale })
  return DateUtils.isDate(parsed) ? parsed : null
}

const formatDate = (date, format, locale) =>
  dateFnsFormat(date, format, { locale });

const format = "dd MMM yyyy";

const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
}


export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex justify-between border items-center p-3">
      <DayPickerInput
        className="basis-2/4 px-3 py-2 focus:border-none focus:outline-none"
        formatDate={formatDate}
        format={format}
        parseDate={parseDate}
        placeholder='Check in'
        inputProps={
          { 
            required: true 
          }
        }
        dayPickerProps={{
          modifiers: {
            disabled: {
              before: new Date()
            }
          }
        }}
        onDayChange={day => {
          setStartDate(day)
          if (numberOfNightsBetweenDates(day, endDate) < 1) {
            const newEndDate = new Date(day)
            newEndDate.setDate(newEndDate.getDate() + 1)
            setEndDate(newEndDate);
          }

          // datesChanged(day, newEndDate);
        }}
      />

//       <DayPickerInput
//         className="basis-2/4 px-3 py-2"
//         formatDate={formatDate}
//         format={format}
//         parseDate={parseDate}
//         placeholder='Check out'
//         dayPickerProps={{
//         }}
//       />

      <DayPickerInput 
      className="basis-2/4 px-3 py-2"
      formatDate={formatDate}
      format={format}
      parseDate={parseDate}
      placeholder='Check out'
      inputProps={
          { 
            required: true 
          }
        }
      dayPickerProps={{

          modifiers: {
            disabled: [
              startDate,
              {
                before: startDate
              }
            ]
          }
        }}
        onDayChange={day => {
          setEndDate(day)

        }}
      />
    </div>
  )
}