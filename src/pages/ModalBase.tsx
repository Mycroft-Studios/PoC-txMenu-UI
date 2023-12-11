import React from "react";
import {Actions} from "@/src/modelPages/Actions";
import {Info} from "@/src/modelPages/Info";
import {Ban} from "@/src/modelPages/Ban";
import {History} from "@/src/modelPages/History";
import {IDs} from "@/src/modelPages/IDs";
import {AdaptiveCardPage} from "@/src/modelPages/adaptiveCard";

const tabToRender = (tab: string) => {
    switch (tab) {
        case "Actions":
            return <Actions />
        case "Info":
            return <Info />
        case "Ban":
            return <Ban />
        case "History":
            return <History />
        case "IDs":
            return <IDs />
        default:
            return <AdaptiveCardPage />
    }
}

export function ModalBase(props: {currentTab: string}) {
    return (
        <div className="flex flex-grow flex-1" style={{marginLeft: "25px"}}>
            {tabToRender(props.currentTab)}
        </div>
    );
}