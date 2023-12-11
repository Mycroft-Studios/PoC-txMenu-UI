import {Button} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import { Textarea } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/textarea";
import { Label } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/label"
import {Input} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/select";
import React from "react";

const DurationOptions = ["2 Hours", "8 Hours", "1 Day", "2 Days", "1 Week", "2 Weeks", "Permanent", "Custom"]
const DurationValues = ["2h", "8h", "1d", "2d", "1w", "2w", "perm", "custom"]
const DurationMoreOptions = ["Minutes", "Hours","Days", "Weeks", "Months", "Years"]

export function Ban() {
    const [show, setShow] = React.useState(false);
    const [currentDuration, setCurrentDuration] = React.useState("2h");

    function handleDurationChange(value: string) {
        setCurrentDuration(value);

        if (value == "custom") {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <div>
            <p className="text-xl">Ban Player</p>
            <div className="grid grid-rows-7 gap-0">
                <Label htmlFor="reason" style={{fontSize: "17px", marginTop: "14px", marginBottom: "5px"}}>Reason</Label>
                <Input id="reason" placeholder="Cheating." className="w-[350px]"/>
                <Label htmlFor="duration" style={{fontSize: "17px", marginTop: "14px", marginBottom: "5px"}}>Duration</Label>
                <Select onValueChange={handleDurationChange}>
                    <SelectTrigger className="w-[250px]" id="duration">
                        <SelectValue placeholder="Select Duration"/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            DurationOptions.map((option, index) => (
                                <SelectItem key={option} value={DurationValues[index]}>{option}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <div className="flex flex-row" style={{marginTop: "5px", display: show ? "block": "none"}}>
                    <div className="flex flex-row space-x-2" style={{marginTop: "5px"}}>
                        <Input id="hours" type="number" className="w-[150px]"/>
                        <Select>
                            <SelectTrigger className="w-[150px]" id="more_duration">
                                <SelectValue placeholder="Hours" />
                            </SelectTrigger>
                            <SelectContent>
                                {DurationMoreOptions.map((option) => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button variant="outlineDestructive" className="w-28" style={{justifyContent: "center", marginTop: "30px"}}>
                    Apply Ban
                </Button>
            </div>
        </div>
    );
}