import React from "react";
import {Button} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import {ShieldAlertIcon, ShieldCheckIcon, ShieldXIcon} from "lucide-react";

const Options = [
    {
        "name": "Moderation",
        "actions": ["DM", "Warn", "Kick", "Give Admin"]
    },
    {
        "name": "Interaction",
        "actions": ["Heal", "Goto", "Bring", "Spectate", "Toggle Freeze"]
    },
    {
        "name": "Trolling",
        "actions": ["Make Drunk", "On Fire", "Wild Attack"]
    }
]

export function Actions() {
    return (
        <div>
            <p className="text-xl">Player Actions</p>
            <div className="flex flex-col" style={{marginBottom: "8px"}}>
                {Options.map((option) => (
                    <div key={option.name}>
                        <p style={{marginTop: "15px", fontSize: "17px", marginBottom: "5px"}}>{option.name}</p>
                        <div className="flex flex-row h-10 space-x-3">
                            {option.actions.map((action) => (
                                <Button key={action} variant="outline" className="" style={{justifyContent: "center"}}>
                                    {action}
                                </Button>
                            ))}
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}