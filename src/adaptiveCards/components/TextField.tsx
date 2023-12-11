import * as React from "react";
import { Textarea } from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/textarea";
import { Label } from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/label"
import {Input} from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/input";
import {getSize} from "@/src/adaptiveCards/objects/render";

export const ACTextField = (props: any) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const { size = "medium", color = "primary", variant = "outlined", onChangeHandler, isNumber } = props;

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChangeHandler) {
      const anyError = onChangeHandler(newValue); // Pass state info to implementer, take any error
      setError(anyError);
      setHelperText(anyError ? "Field is required" : "");
    }
  };
  return (
      <div className="grid grid-rows-7 gap-0">
        <Input style={getSize(size)} id="reason" type={isNumber ? "number": "text"} width={"100%"} onChange={handleChange} value={value} {... props}/>
      </div>
  );
};

export default ACTextField;