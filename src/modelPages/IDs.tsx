import {Button} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/button";
import { Textarea } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/textarea";
import { Label } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/label"
import { ScrollArea } from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/scroll-area"

import React from "react";
import {Card, CardContent, CardHeader} from "../../../Downloads/tx/PoC-txMenu-UI/components/ui/card";


const CurrentIdentifiers = ["license:b71462f3eb02845186420acedf22998666b48f18", "xbl:2535466819559104", "live:1688853338121171", "discord:147409981757587456", "fivem:878374", "license2:01a1287754293da467ee747ac1d09eb180c0dadb"]
const PreviousIdentifiers = ["license:b71462f3eb02845186420acedf22998666b48f18", "xbl:2535413260245882", "live:1829582842570057", "discord:147409981757587456", "fivem:878374", "license2:01a1287754293da467ee747ac1d09eb180c0dadb", "xbl:2535466819559104", "live:1688853338121171"]
const HardwareIdentifiers = ["2:dce7b55767c488e3fd8422cc7d6c050e3ecf4ec300dc749ac09f7715f8a94eb2", "3:efaa0975136907f7e9282067896ed1bed0a43eb3fc0c23e14ce9e463d7502ed0", "4:ee93a403239bacb2b14fc5e6cde343c3d255b8f5bd744505ec95d764af5f7d32", "4:8cb851b1967ee2b54e7e52bb9bc68707961b74534006251a26fe34bc09519882", "4:2f4b1f0e376e6f528d4549f72b36dec56a37bc8c2b5d6d96e0287c85152b9482", "5:9540d93dd8945418d24b7201a49be7f71ff2fdad1766c5e3b0b2c8e8d6fd7909", "2:afcb6aeaf83fd09822c7daab4ec57e7c7f155ce9d0dc69f849b91b9a2dd088a6", "4:760a067af411f9f1e00d919bf53f193184b1d00bdd0777179c52547bef863183"]


export function IDs() {
    return (
        <div className="">
            <ScrollArea className="h-[480px] w-[550px]">
                <p className="text-xl">Current Identifiers</p>
                <div className="flex flex-col gap-2">
                    {
                        CurrentIdentifiers.map((identifier) => (
                            <Card key={identifier} style={{height: "40px", paddingTop: "7px",marginTop: "5px", width: "500px"}}>
                                <CardContent style={{justifyContent: "left", alignContent: "flex-start"}}>
                                    <p style={{fontFamily: "monospace", fontSize: "15px"}}>{identifier}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                <p className="text-xl mt-3">Previously Used Identifiers</p>
                <div className="flex flex-col gap-2">
                    {
                        PreviousIdentifiers.map((identifier) => (
                            <Card key={identifier} style={{height: "40px", paddingTop: "7px",marginTop: "5px", width: "500px"}}>
                                <CardContent style={{justifyContent: "left", alignContent: "flex-start"}}>
                                    <p style={{fontFamily: "monospace", fontSize: "15px"}}>{identifier}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                <p className="text-xl mt-3">Hardware Identifiers</p>
                <div className="flex flex-col gap-2">
                    <Card style={{height: "155px", marginTop: "5px", marginBottom: "20px", width: "525px", padding: "5px", paddingLeft: "0px"}}>
                        <CardContent style={{paddingLeft: "5px"}}>
                            <div className="flex flex-col gap-2" style={{fontSize: "0.87rem", letterSpacing: "0px", lineHeight: "9px", fontFamily: "monospace"}}>
                                {HardwareIdentifiers.map((identifier) => (
                                    <p key={identifier}>{identifier}</p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </ScrollArea>
        </div>
    );
}