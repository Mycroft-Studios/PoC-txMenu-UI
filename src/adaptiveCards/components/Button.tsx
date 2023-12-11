import {Button} from "../../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import React from "react";

export function ACButton(props: any) {
  const { label, disabled } = props;
  return (
      <Button variant={disabled ? "secondary": "outline"} className="flex flex-grow" style={{justifyContent: "center"}} {...props}>
          {label}
      </Button>
  );
};