import {Button} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import { Textarea } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/textarea";
import { Label } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/label"
import React from "react";

export interface HistoryCardProps {
    reason: string;
    issuer: string;
    date: string;
    type: string;
}

export function HistoryCard(props: HistoryCardProps) {
    const {reason, issuer, date, type} = props;
    const color = type == "BANNED" ? "var(--accent)" : "var(--warning)";

    return (
        <div className={"flex flex-col space-x-2 bg-secondary mt-1 pr-2 border-l-4"} style={{marginTop: "5px", fontSize: "15px", borderLeftColor: color}}>
            <div className="flex flex-row">
                <div className="flex flex-row ml-3 flex-wrap w-52 gap-1">
                    <strong>{type} by </strong>
                    <strong>{issuer}</strong>
                </div>
                <div className="ml-20 flex flex-row">
                    <p className="ml-4 text-muted-foreground font-mono font-light" style={{fontSize: "14px"}}>{date}</p>
                    <Button variant="outline" className="w-16 ml-2 rounded-sm" style={{justifyContent: "center", height: "20px", marginTop: "1px"}}>
                        <p style={{fontSize: "13px"}}>Revoke</p>
                    </Button>
                </div>
            </div>
            <div>
                <p className="ml-2">{reason}</p>
            </div>
        </div>
    );
}