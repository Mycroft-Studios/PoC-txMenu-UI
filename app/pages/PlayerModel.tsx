import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import * as React from "react";
import {PlayerCard} from "@/app/pages/PlayerCard";
import {Separator} from "@/components/ui/separator";
import {ModalBase} from "@/app/pages/ModalBase";
import {PlayerDetails} from "@/app/pages/PlayerList";
import {ZapIcon, InfoIcon, ListIcon, HistoryIcon, BanIcon} from "lucide-react";

const Menus = ["Actions", "Info", "IDs", "History", "Ban"]

function getIconForMenu(menu: string) {
    switch (menu) {
        case "Actions":
            return <ZapIcon className="mr-2 h-4 w-4" />
        case "Info":
            return <InfoIcon className="mr-2 h-4 w-4" />
        case "IDs":
            return <ListIcon className="mr-2 h-4 w-4" />
        case "History":
            return <HistoryIcon className="mr-2 h-4 w-4" />
        case "Ban":
            return <BanIcon className="mr-2 h-4 w-4" />
        default:
            return <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
            >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
    }
}


export function PlayerModel(props: {Player: PlayerDetails}) {
    const [selectedMenu, setSelectedMenu] = React.useState("Actions")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="hover:bg-card hover:text-primary" variant="outline" style={{padding: "8px", width: "340px", height: "75px", justifyContent: "left"}}>
                    <PlayerCard Player={props.Player}/>
                </Button>
            </DialogTrigger>
            <DialogContent style={{minWidth: "800px"}}>
                <DialogHeader>
                    <DialogTitle>[{props.Player.id}] {props.Player.name}</DialogTitle>
                </DialogHeader>
                <Separator style={{width: "100%"}} />
                <div className="inline-grid grid-flow-col-dense w-200" style={{justifyContent: "left", alignContent: "left"}}>
                    <div className="px-3 py-2" style={{width: "175px"}}>
                        <div className="space-y-1.5">
                            {Menus.map((menu) => (
                                <Button key={menu} variant={selectedMenu == menu ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => setSelectedMenu(menu)}>
                                    {getIconForMenu(menu)}
                                    <p style={{fontSize: "15px"}}>{menu}</p>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <Separator orientation="vertical"/>
                    <ModalBase currentTab={selectedMenu} />
                </div>
            </DialogContent>
        </Dialog>
    );
}