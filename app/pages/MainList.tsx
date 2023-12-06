import * as React from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {BookmarkIcon, CarIcon, GroupIcon, HeartPulseIcon, Mail, MoveIcon, TimerResetIcon} from "lucide-react";
import {AnnoucementDialog} from "@/app/pages/AnnoucementDialog";
import {ReactElement} from "react";
import {useKeyboardNavigation} from "@/app/hooks/useKeyboardNavigation";
import {MainListItem} from "@/app/pages/MainListItem";

export interface ButtonProps {
    name: string;
    options: string[] | undefined;
    icon: ReactElement;
}

let Buttons: ButtonProps[] = [
    {
        name: "Player Mode",
        icon: <MoveIcon className="mr-2 h-5 w-4" />,
        options: ["Normal", "Noclip", "Godmode", "Super Jump"],
    },
    {
        name: "Teleport",
        icon: <BookmarkIcon className="mr-2 h-5 w-4" />,
        options: [" Waypoint", " Coords", " Back", " Copy Coords"],
    },
    {
        name: "Vehicle",
        icon: <CarIcon className="mr-2 h-5 w-4" />,
        options: ["Spawn", "Repair", "Delete", "Boost"],
    },
    {
        name: "Heal",
        icon: <HeartPulseIcon className="mr-2 h-5 w-4" />,
        options: ["Myself", "Everyone"],
    },
    {
        name: "Send Announcement",
        icon: <Mail className="mr-2 h-5 w-4" />,
        options: undefined,
    },
    {
        name: "Reset World",
        icon: <TimerResetIcon className="mr-2 h-5 w-4" />,
        options: undefined,
    },
    {
        name: "Toggle Player IDs",
        icon: <GroupIcon className="mr-2 h-5 w-4" />,
        options: undefined,
    },
]

export default function MainList() {
    const [selectedMenu, setSelectedMenu] = React.useState(0);

    const handleArrowDown = React.useCallback(() => {
        const next = selectedMenu + 1;
        setSelectedMenu(next >= Buttons.length ? 0 : next);
    }, [selectedMenu]);

    const handleArrowUp =  React.useCallback(() => {
        const next = selectedMenu - 1;
        setSelectedMenu(next < 0 ? Buttons.length - 1 : next);
    }, [selectedMenu]);


    useKeyboardNavigation({
        onDownDown: handleArrowDown,
        onUpDown: handleArrowUp,
        disableOnFocused: false,
    });

    return (
        <Card className="w-[270px] mt-2">
            <CardContent className="bg-origin-content" style={{marginTop: "5px", paddingLeft: "5px", paddingBottom: "5px"}}>
                <div className="grid w-full items-center gap-4">
                    <div className="inline-grid grid-flow-col-dense" style={{justifyContent: "left", alignContent: "left"}}>
                        <div style={{width: "255px"}}>
                            <div className="space-y-0.5">
                                {Buttons.map((menu, index) => (
                                        menu.name == "Send Announcement" ?
                                            <AnnoucementDialog key={index} selected={selectedMenu == index} setSelected={setSelectedMenu} index={index}/> :
                                            <MainListItem key={index} menu={menu} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} index={index}/>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
            </CardContent>
        </Card>
    );
}