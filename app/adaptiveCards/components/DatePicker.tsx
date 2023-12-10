import * as React from "react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function DatePicker(props: any) {
  const { onChangeHandler } = props;
  const [value, setValue] = React.useState<Date>();

  const handleChange = (newValue: any) => {
    setValue(newValue);
    if (onChangeHandler) onChangeHandler(newValue); // Pass state info to implementer
  };

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant={"outline"}
                className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !value && "text-muted-foreground"
                )}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Calendar
                mode="single"
                selected={value}
                onSelect={handleChange}
                initialFocus
            />
        </PopoverContent>
    </Popover>
  );
}

export default DatePicker;