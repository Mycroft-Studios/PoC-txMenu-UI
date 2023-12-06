import * as AC from "adaptivecards";
import { ACButton} from "@/app/adaptiveCards/components/Button";
import { reactDomRender } from "./render";

export class ToggleVisibilityAction extends AC.ToggleVisibilityAction {
  private internalRenderedElement: any;

  // Get the properites of the action
  static readonly textProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "text",
    true
  );

  static readonly titleProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "title",
    true
  );

  getTitle(): string | undefined {
    return this.getValue(ToggleVisibilityAction.titleProperty);
  }

  getText(): string | undefined {
    return this.getValue(ToggleVisibilityAction.textProperty);
  }

  get renderedElement(): HTMLElement | undefined {
    return this.internalRenderedElement;
  }

  getColourValue(): string {
    switch (this.style) {
        case "positive":
            return "success";
        case "destructive":
            return "error";
        default:
            return "outline";
    }
  }

  render() {
    const element = reactDomRender(this.renderElement());;
    this.internalRenderedElement = element;
  }

  private renderElement = (): JSX.Element => {
    // TODO: Based on the style of button (i.e. positive/destuctive) may need to render differently
    return <ACButton label={this.title} disabled={!this.isEnabled} color={this.getColourValue()} onClick={() => this.execute()} />
  };
}
