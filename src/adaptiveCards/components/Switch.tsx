import * as React from "react";
import { Label } from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/label"
import { Switch } from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/switch"

const SwitchWithLabel = (props: any) => {
  const { onChangeHandler, label, id } = props;
  const [value, setValue] = React.useState("off");
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChangeHandler) onChangeHandler(newValue);
  };
  return (
      <div className="flex flex-row items-center space-x-2 justify-center mt-2">
        <Switch id={"switch-for-" + id} value={value} onChange={handleChange}/>
        <Label htmlFor={"switch-for-" + id}>{label}</Label>
      </div>
  );
};

export default SwitchWithLabel;