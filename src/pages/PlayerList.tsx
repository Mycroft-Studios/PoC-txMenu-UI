import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/card";
import {Input} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/input";
import * as React from "react";
import {PlayerModel} from "@/src/pages/PlayerModel";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/select";
import {Label} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/label";

export interface PlayerDetails {
    name: string;
    id: string;
    distance: number;
    health: number;
}

const Players: PlayerDetails[] = [
    {
        name: "Mycroft",
        id: "1",
        distance: 0,
        health: 100,
    },
    {
        name: "Tabby",
        id: "2",
        distance: 5,
        health: 60,
    },
    {
        name: "Yorick",
        id: "4",
        distance: 6,
        health: 30,
    },
    {
        name: "WowJesus",
        id: "5",
        distance: 83,
        health: 55,
    },
    {
        name: "GoatGeek",
        id: "6",
        distance: 123,
        health: 89,
    },
    {
        name: "Tyler",
        id: "10",
        distance: 16,
        health: 10,
    },
]
export function PlayerList(props: {Hide: boolean} ) {

    function select(Player: PlayerDetails, selected: string) {
        return <PlayerModel Player={Player} Page={selected}/>
    }
    return (
        <Card className="bg-background" style={{width: "98%", height: "740px", margin: "20px", marginTop: "5px", marginLeft: "10px"}} hidden={props.Hide}>
            <CardHeader>
                <div className="flex flex-row">
                    <div className="flex flex-col space-x-0">
                        <CardTitle> Online Players </CardTitle>
                        <CardDescription> 1/48 Players - OneSync (on) </CardDescription>
                    </div>
                    <div className="flex flex-row space-x-2" style={{marginLeft: "67%"}}>
                        <div className="flex flex-col">
                            <Label htmlFor="search" style={{fontSize: "17px"}}>Search</Label>
                            <Input id="search" placeholder="" className="w-[200px]"/>
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="sort_by" style={{fontSize: "17px"}}>Sort By</Label>
                            <Select>
                                <SelectTrigger className="w-[200px]" id="sort_by">
                                    <SelectValue placeholder="Hours" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="id-f">ID (Joined First)</SelectItem>
                                    <SelectItem value="id-l">ID (Joined Last)</SelectItem>
                                    <SelectItem value="d-c">Distance (Closest)</SelectItem>
                                    <SelectItem value="d-f">Distance (Farthest)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="bg-background p-5 pt-0" style={{width: "100%", height: "100%"}}>
                <div className="flex flex-row gap-6 flex-wrap mt-1 ml-4">
                    {Players.map((player: PlayerDetails) => (
                        <PlayerModel key={player.id} Player={player} Page={"Actions"}/>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}