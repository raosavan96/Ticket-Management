import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DatePickerField = ({
  control,
  name,
  label,
  isRequire = false,
  placeholder = "Pick a date",
  style = "w-full",
  mode = "single", // "single" or "range"
  mainStyle=""
}) => {
  return (
    <div className={style}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => {
          const value = field.value;

          // handle both single and range
          const singleDate = value ? new Date(value) : null;
          const from = value?.from ? new Date(value.from) : null;
          const to = value?.to ? new Date(value.to) : null;

          const buttonLabel =
            mode === "range"
              ? from && to
                ? `${format(from, "MMM d, yyyy")} - ${format(to, "MMM d, yyyy")}`
                : placeholder
              : singleDate
              ? format(singleDate, "PPP")
              : placeholder;

          return (
            <FormItem>
              <FormLabel>
                {label} {isRequire && <span className="text-[red]">*</span>}
              </FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!value}
                      className={`${mainStyle} data-[empty=true]:text-muted-foreground  justify-start text-left font-normat`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {buttonLabel}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode={mode}
                      selected={mode === "range" ? value : singleDate}
                      onSelect={(selectedDate) => {
                        field.onChange(selectedDate);
                      }}
                      numberOfMonths={mode === "range" ? 2 : 1}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
};

export default DatePickerField;
