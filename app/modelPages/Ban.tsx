import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";

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
                        <SelectItem value="2h">2 Hours</SelectItem>
                        <SelectItem value="8h">8 Hours</SelectItem>
                        <SelectItem value="1d">1 Day</SelectItem>
                        <SelectItem value="2d">2 Days</SelectItem>
                        <SelectItem value="1w">1 Week</SelectItem>
                        <SelectItem value="2w">2 Weeks</SelectItem>
                        <SelectItem value="perm">Permanent</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
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
                                <SelectItem value="h">Hours</SelectItem>
                                <SelectItem value="w">Weeks</SelectItem>
                                <SelectItem value="m">Months</SelectItem>
                                <SelectItem value="d">Years</SelectItem>
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