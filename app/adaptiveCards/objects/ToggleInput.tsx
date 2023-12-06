import * as React from "react";
import * as AC from "adaptivecards";
import Switch from "../components/Switch";
import { reactDomRender } from "./render";


export class ToggleInput extends AC.ToggleInput {
  static readonly JsonTypeName = "Input.Toggle";

  // For form submission
  private _value = "false";
  public get value(): string {
    return this._value;
  }
  public isSet(): boolean {
    return this._value ? true : false;
  }
  protected onChange(newValue: string) {
    console.log("newValue", newValue);
    this._value = newValue;
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement() {
    return (
            <Switch
                label={this.title}
                onChangeHandler={(e: any) => this.onChange(e)}
            />
    );
  }
}
