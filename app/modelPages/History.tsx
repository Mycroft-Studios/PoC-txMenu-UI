import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";
import {PlayerModel} from "@/app/pages/PlayerModel";
import {PlayerDetails} from "@/app/pages/PlayerList";
import {HistoryCard, HistoryCardProps} from "@/app/modelPages/HistoryCard";

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