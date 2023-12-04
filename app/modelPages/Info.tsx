import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import React from "react";

export function Info() {
    return (
        <div>
            <p className="text-xl">Player Information</p>
            <div className="grid grid-rows-8 gap-0">
                    <div className={"flex flex-row h-5 space-x-2"} style={{marginTop: "5px", fontSize: "15px"}}>
                        <p>Session Time:</p>
                        <p className="text-muted-foreground">5 hours, 43 minutes</p>
                    </div>
                <div className={"flex flex-row h-5 space-x-2"} style={{marginTop: "5px", fontSize: "15px"}}>
                    <p style={{fontSize: "15px"}}>Play Time:</p>
                    <p className="text-muted-foreground">18 days, 21 hours</p>
                </div>
                <div className={"flex flex-row h-5 space-x-2"} style={{marginTop: "5px", fontSize: "15px"}}>
                    <p style={{fontSize: "15px"}}>Joined:</p>
                    <p className="text-muted-foreground">20 December 2022</p>
                </div>
                <div className={"flex flex-row h-5 space-x-2"} style={{marginTop: "5px", fontSize: "15px"}}>
                    <p style={{fontSize: "15px"}}>Whitelisted:</p>
                    <p className="text-muted-foreground">not yet</p>
                    <Button variant="outline" className="w-16 rounded-sm" style={{justifyContent: "center", height: "20px", marginTop: "1px"}}>
                        <p style={{fontSize: "13px"}}>Add WL</p>
                    </Button>
                </div>
                <div className={"flex flex-row h-5 space-x-2"} style={{marginTop: "5px", fontSize: "15px"}}>
                    <p style={{fontSize: "15px"}}>Log:</p>
                    <p className="text-red-600">0 Bans,</p>
                    <p className="text-yellow-400">1 Warn</p>
                    <Button variant="outline" className="w-16 rounded-sm" style={{justifyContent: "center", height: "20px", marginTop: "1px"}}>
                        <p style={{fontSize: "13px"}}>View</p>
                    </Button>
                </div>
                <Label htmlFor="message" style={{fontSize: "17px", marginTop: "14px", marginBottom: "5px"}}>Notes</Label>
                <Textarea placeholder="Type your notes about the player." id="message" className="w-[550px]"/>
                <Button variant="outline" className="w-24" style={{justifyContent: "center", marginTop: "10px"}}>
                    Save Notes
                </Button>
            </div>
        </div>
    );
}