import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import React from "react";

export function HistoryCard() {
    return (
        <div className={"flex flex-col space-x-2 bg-secondary mt-1 pr-2 border-l-4 border-l-destructive"} style={{marginTop: "5px", fontSize: "15px"}}>
            <div className="flex flex-row">
                <div>
                    <strong className="ml-3">WARNED by </strong>
                    <strong>Mycroft</strong>
                </div>
                <div className="ml-40 flex flex-row">
                    <p className="ml-4 text-muted-foreground font-mono font-light" style={{fontSize: "14px"}}>04/12/2023 12:00</p>
                    <Button variant="outline" className="w-16 ml-2 rounded-sm" style={{justifyContent: "center", height: "20px", marginTop: "1px"}}>
                        <p style={{fontSize: "13px"}}>Revoke</p>
                    </Button>
                </div>
            </div>
            <div>
                <p className="ml-2">This is the reason.</p>
            </div>
        </div>
    );
}