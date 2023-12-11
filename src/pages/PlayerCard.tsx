import {PersonStandingIcon} from "lucide-react";
import {PlayerDetails} from "@/src/pages/PlayerList";
import {Progress} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/progress";
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
            <div className="grid grid-cols-3 gap-4" style={{marginLeft: "10px"}}>
                    <div style={{fontSize: "18px"}}>
                        <div className="flex flex-row gap-2" style={{justifyContent: "left"}}>
                            <p><PersonStandingIcon /></p>
                            <p>{props.Player.id} | <strong>{props.Player.name} </strong></p>
                            <p className="text-muted-foreground">{props.Player.distance}m</p>
                        </div>
                        <Progress value={props.Player.health} className="h-2" style={{marginTop: "5px", width: "300px"}} indicatorColor={getIndicatorColor(props.Player.health)}/>
                    </div>
            </div>
    );
}