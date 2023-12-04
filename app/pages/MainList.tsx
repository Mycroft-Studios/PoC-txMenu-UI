import * as React from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {BookmarkIcon, CarIcon, GroupIcon, HeartPulseIcon, Mail, MoveIcon, TimerResetIcon} from "lucide-react";
import {AnnoucementDialog} from "@/app/pages/AnnoucementDialog";

const Modes = ["Normal", "Noclip", "Godmode", "Super Jump"]
const vehicleModes = ["Spawn", "Repair", "Delete", "Boost"]
const teleportModes = ["Teleport", "Coords", "Back", "Copy Coords"]
const healModes = ["Myself", "Everyone"]
export default function MainList() {
    const [selectedMode, setSelectedMode] = React.useState(0)
    const [SelectedVehcleMode, setSelectedVehcleMode] = React.useState(0)
    const [selectedTeleportMode, setSelectedTeleportMode] = React.useState(0)
    const [SelectedHealMode, setSelectedHealMode] = React.useState(0)

    function ChangeMode() {
        if (selectedMode + 1 === Modes.length) {
            setSelectedMode(0)
        } else {
            setSelectedMode(selectedMode + 1)
        }
    }

    function ChangeVehicleMode() {
        if (SelectedVehcleMode + 1 === vehicleModes.length) {
            setSelectedVehcleMode(0)
        } else {
            setSelectedVehcleMode(SelectedVehcleMode + 1)
        }
    }

    function ChangeTeleportMode() {
        if (selectedTeleportMode + 1 === teleportModes.length) {
            setSelectedTeleportMode(0)
        } else {
            setSelectedTeleportMode(selectedTeleportMode + 1)
        }
    }

    function ChangeHealMode() {
        if (SelectedHealMode + 1 === healModes.length) {
            setSelectedHealMode(0)
        } else {
            setSelectedHealMode(SelectedHealMode + 1)
        }
    }

    return (
        <Card className="w-[250px]">
            <CardContent className="bg-origin-content" style={{marginTop: "5px", marginBottom: "5px", paddingLeft: "5px"}}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5 h-5">
                        <Button variant="ghost" className="w-56 alig" style={{justifyContent: "left"}} onClick={ChangeMode} >
                            <MoveIcon className="mr-2 h-4 w-4" />Player Mode: <p className="font-extralight" style={{marginLeft: "5px"}}> {Modes[selectedMode]}</p>
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-1 h-5">
                        <Button variant="ghost" className="w-56" style={{justifyContent: "left"}} onClick={ChangeTeleportMode}>
                            <BookmarkIcon className="mr-2 h-4 w-4" />Teleport: <p className="font-extralight" style={{marginLeft: "5px"}}> {teleportModes[selectedTeleportMode]}</p>
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-1 h-5">
                        <Button variant="ghost" className="w-56" style={{justifyContent: "left"}} onClick={ChangeVehicleMode}>
                            <CarIcon className="mr-2 h-4 w-4" />Vehicle: <p className="font-extralight" style={{marginLeft: "5px"}}> {vehicleModes[SelectedVehcleMode]}</p>
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-1 h-5">
                        <Button variant="ghost" className="w-56" style={{justifyContent: "left"}} onClick={ChangeHealMode}>
                            <HeartPulseIcon className="mr-2 h-4 w-4" /> Heal: <p className="font-extralight"  style={{marginLeft: "5px"}}> {healModes[SelectedHealMode]}</p>
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-1 h-5">
                        <AnnoucementDialog />
                    </div>
                    <div className="flex flex-col space-y-0.5 h-5">
                        <Button variant="ghost" className="w-56" style={{justifyContent: "left"}}>
                            <TimerResetIcon className="mr-2 h-4 w-4" />Reset World</Button>
                    </div>
                    <div className="flex flex-col space-y-1 h-5">
                        <Button variant="ghost" className="w-56" style={{justifyContent: "left"}}>
                            <GroupIcon className="mr-2 h-4 w-4" />Toggle Player IDs</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}