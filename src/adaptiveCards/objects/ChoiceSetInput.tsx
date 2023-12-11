import * as AC from "adaptivecards";
import ACSelect from "@/src/adaptiveCards/components/Select";
import { reactDomRender } from "./render";

export class ChoiceSetInput extends AC.ChoiceSetInput {
  static readonly JsonTypeName = "Input.ChoiceSet";

  // For form submission
  private _value = ""
  public get value(): any {
    return this._value;
  }
  public isSet(): boolean {
    return this._value?.length > 0;
  }
  protected onChange(newValue: string) {
    this._value = newValue;
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement = (): JSX.Element => {
    interface item {
        label: string | undefined
        value: string
    }
    var items:item[] = []

    this.choices.map((item, key) => (
        items.push({ label: item.title, value:item.value || ""})
    ))
  
    return (
            <ACSelect
                label={this.label || this.placeholder}
                onChange={(e: any) => this.onChange(e)}
                items={items}
                value={this._value}
            />
    );
  };
}
