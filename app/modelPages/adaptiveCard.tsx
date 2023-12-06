import {ProvidesHostConfigContext, AdaptiveCardUsingHostConfigContext } from "adaptivecards-react";
import * as ACData from "adaptivecards-templating";
import * as AC from "adaptivecards";
import React from "react";
import rawCard from "./card.json";
import rawCardData from "./cardData.json";

import { TextInput } from "@/app/adaptiveCards/objects/TextInput";
import { NumberInput } from "@/app/adaptiveCards/objects/NumberInput";
import { ToggleInput } from "@/app/adaptiveCards/objects/ToggleInput";
import { TimeInput } from "@/app/adaptiveCards/objects/TimeInput";
import { DateInput } from "@/app/adaptiveCards/objects/DateInput";
import { ChoiceSetInput } from "@/app/adaptiveCards/objects/ChoiceSetInput";
import { ToggleVisibilityAction } from "@/app/adaptiveCards/objects/ToggleVisibilityAction";
import { ExecuteAction } from "@/app/adaptiveCards/objects/ExecuteAction";
import { SubmitAction } from "@/app/adaptiveCards/objects/SubmitAction";

// AC.GlobalRegistry.elements.register(ToggleInput.JsonTypeName,ToggleInput);
// AC.GlobalRegistry.elements.register(TimeInput.JsonTypeName,TimeInput);
AC.GlobalRegistry.elements.register(DateInput.JsonTypeName,DateInput);
AC.GlobalRegistry.elements.register(ChoiceSetInput.JsonTypeName,ChoiceSetInput);
// AC.GlobalRegistry.actions.register(ToggleVisibilityAction.JsonTypeName, ToggleVisibilityAction);
AC.GlobalRegistry.actions.register(ExecuteAction.JsonTypeName, ExecuteAction);
AC.GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction);
AC.GlobalRegistry.elements.register(TextInput.JsonTypeName, TextInput);
AC.GlobalRegistry.elements.register(NumberInput.JsonTypeName, NumberInput);

export function AdaptiveCard() {
    const [resource, setResource] = React.useState("Mycroft-Studios");
    const template = new ACData.Template(rawCard);
    const context: ACData.IEvaluationContext = {
        "$root": rawCardData
    } ;
    const card = template.expand(context);
    const hostConfig = {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        separator: {
            lineThickness: 2,
            lineColor: "var(--muted-foreground)",
        },
        "spacing": {
            "small": 4,
            "default": 10,
            "medium": 20,
            "large": 30,
            "extraLarge": 40,
            "padding": 15
        },
        "imageSizes": {
            "small": 20,
            "medium": 40,
            "large": 80
        },
        "supportsInteractivity": true,
        "factSet": {
            "title": {
                "color": "default",
                "size": "default",
                "isSubtle": false,
                "weight": "bolder",
                "wrap": true,
                "maxWidth": 150
            },
            "value": {
                "color": "default",
                "size": "default",
                "isSubtle": false,
                "weight": "default",
                "wrap": true
            },
            "spacing": 15
        },
        containerStyles: {
            default: {
                foregroundColors: {
                    default: {
                        default: "var(--primary)",
                        subtle: "var(--secondary)",
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    dark: {
                        default: '#000000',
                        subtle: '#66000000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    light: {
                        default: '#FFFFFF',
                        subtle: '#33000000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    accent: {
                        default: "var(--accent)",
                        subtle: 'rgba(var(--color-teal), .75)',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    good: {
                        default: "var(--success)",
                        subtle: '#DD00FF00',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    warning: {
                        default: "var(--warning)",
                        subtle: '#DDFFD800',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    attention: {
                        default: "var(--error)",
                        subtle: '#DDFF0000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    }
                },
                backgroundColor: "var(--background)",
            },
            emphasis: {
                foregroundColors: {
                    default: {
                        default: "var(--primary)",
                        subtle: "var(--secondary)",
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    dark: {
                        default: '#000000',
                        subtle: '#66000000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    light: {
                        default: '#FFFFFF',
                        subtle: '#33000000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    accent: {
                        default: "var(--accent)",
                        subtle: 'rgba(var(--color-teal), .75)',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    good: {
                        default: "var(--success)",
                        subtle: '#DD00FF00',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    warning: {
                        default: "var(--warning)",
                        subtle: '#DDFFD800',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    },
                    attention: {
                        default: "var(--error)",
                        subtle: '#DDFF0000',
                        highlightColors: {
                            default: '#22000000',
                            subtle: '#11000000'
                        }
                    }
                },
                backgroundColor: "var(--background)"
            }
        }
    };
    return (
        <div className="">
            <ProvidesHostConfigContext hostConfig={hostConfig}>
                <AdaptiveCardUsingHostConfigContext payload={card}/>
            </ProvidesHostConfigContext>
            <p className="text-muted-foreground align-bottom text-sm" style={{marginTop: "20px"}}>Disclaimer: Card is provided by resource {resource}, <b style={{fontWeight: 900}}>not txAdmin.</b></p>
        </div>
    );
}