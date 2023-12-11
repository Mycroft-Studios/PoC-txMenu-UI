import {Button} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import { Textarea } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/textarea";
import { Label } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/label";
import {ScrollArea} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/scroll-area";
import React from "react";
import {PlayerModel} from "@/src/pages/PlayerModel";
import {PlayerDetails} from "@/src/pages/PlayerList";
import {HistoryCard, HistoryCardProps} from "@/src/modelPages/HistoryCard";

const cards: HistoryCardProps[] = [
    {
        reason: "Cheating",
        issuer: " Mycroft",
        date: "2021-09-01 12:00:00",
        type: "BANNED"
    },
    {
        reason: "Cheating",
        issuer: " Mycroft",
        date: "2021-09-01 12:00:00",
        type: "WARNED"
    },
];
export function History() {
    return (
        <div>
            <p className="text-xl">Related History</p>
            <div className="flex flex-row gap-0">
                <ScrollArea className="h-[292px] w-[550px]">
                    {cards.map((s: HistoryCardProps) => (
                            <HistoryCard key={s.reason} {... s}/>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
}