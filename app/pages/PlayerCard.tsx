import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger} from "@/components/ui/context-menu";
import {Button} from "@/components/ui/button";
import {PersonStandingIcon} from "lucide-react";
import {PlayerDetails} from "@/app/pages/PlayerList";
import {Progress} from "@/components/ui/progress";
import * as React from "react";


function getIndicatorColor(health: number) {
   if (health > 75) {
       return "#51e47a"
   } else if (health > 45) {
        return "#e8c957"
   } else {
        return "#f86565"
   }
}
export function PlayerCard(props: {Player: PlayerDetails}) {

    return (
        <ContextMenu>
            <ContextMenuTrigger className="grid grid-cols-3 gap-4" style={{marginLeft: "10px"}}>
                    <div style={{fontSize: "18px"}}>
                        <div className="flex flex-row gap-2" style={{justifyContent: "left"}}>
                            <p><PersonStandingIcon /></p>
                            <p>{props.Player.id} | <strong>{props.Player.name} </strong></p>
                            <p className="text-muted-foreground">{props.Player.distance}m</p>
                        </div>
                        <Progress value={props.Player.health} className="h-2" style={{marginTop: "5px", width: "300px"}} indicatorColor={getIndicatorColor(props.Player.health)}/>
                    </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="bg-card" style={{width: "100px", height: "100px"}}>
                <ContextMenuItem>Warn</ContextMenuItem>
                <ContextMenuItem>Kick</ContextMenuItem>
                <ContextMenuItem>Ban</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}