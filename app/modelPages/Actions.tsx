import React from "react";
import {Button} from "@/components/ui/button";
import {ShieldAlertIcon, ShieldCheckIcon, ShieldXIcon} from "lucide-react";

export function Actions() {
    return (
        <div>
            <p className="text-xl">Player Actions</p>
            <div className="grid grid-rows-6 gap-2" style={{marginBottom: "8px"}}>
                 <p style={{marginTop: "15px", fontSize: "17px"}}>Moderation</p>
                 <div className="flex flex-row h-5 space-x-3">
                        <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                            DM
                        </Button>
                        <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                            Warn
                        </Button>
                        <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                           Kick
                        </Button>
                         <Button variant="outline" className="w-25" style={{justifyContent: "center"}}>
                             Give Admin
                         </Button>
                 </div>
                <p style={{marginTop: "15px", fontSize: "17px"}}>Interaction</p>
                <div className="flex flex-row h-5 space-x-3">
                    <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                        Heal
                    </Button>
                    <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                        Goto
                    </Button>
                    <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                        Bring
                    </Button>
                    <Button variant="outline" className="w-25" style={{justifyContent: "center"}}>
                        Spectate
                    </Button>
                    <Button variant="outline" className="w-25" style={{justifyContent: "center"}}>
                        Toggle Freeze
                    </Button>
                </div>
                <p style={{marginTop: "15px", fontSize: "17px"}}>Trolling</p>
                <div className="flex flex-row h-6 space-x-3">
                    <Button variant="outline" className="w-25" style={{justifyContent: "center"}}>
                        Make Drunk
                    </Button>
                    <Button variant="outline" className="w-20" style={{justifyContent: "center"}}>
                        On Fire
                    </Button>
                    <Button variant="outline" className="w-25" style={{justifyContent: "center"}}>
                        Wild Attack
                    </Button>
                </div>
            </div>
        </div>
    );
}