import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function selectSize(size: string) {
    switch (size) {
        case "small":
        return "w-[180px]";
        case "medium":
        return "w-[250px]";
        case "large":
        return "w-[350px]";
        default:
        return "w-[180px]";
    }
}

export default function ACSelect(props: any) {
  const { label, size = "small", items = [], onChange } = props;

  const [value, setValue] = React.useState("");
  interface item {
    label: string | undefined
    value: string
    }

  return (
      <Select onValueChange={(value) => {
          setValue(value as string); // These event signatures are different across mui components...
          if (onChange) onChange(value); // Pass state info to
          }} value={value}>
        <SelectTrigger style={{width: "100%"}}>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
            {items.map((item: item) => (
                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem >
            ))}
        </SelectContent>
      </Select>
  );
};
