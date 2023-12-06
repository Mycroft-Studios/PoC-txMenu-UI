import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";
import {PlayerModel} from "@/app/pages/PlayerModel";
import {PlayerDetails} from "@/app/pages/PlayerList";
import {HistoryCard} from "@/app/modelPages/HistoryCard";

const cards = ["", "", ""]
export function History() {
    return (
        <div>
            <p className="text-xl">Related History</p>
            <div className="flex flex-row gap-0">
                <ScrollArea className="h-[292px] w-[550px]">
                    {cards.map((s: string) => (
                            <HistoryCard key="s" />
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
}