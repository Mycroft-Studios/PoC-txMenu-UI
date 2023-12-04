import React from "react";
import {Actions} from "@/app/modelPages/Actions";
import {Info} from "@/app/modelPages/Info";
import {Ban} from "@/app/modelPages/Ban";
import {History} from "@/app/modelPages/History";
import {IDs} from "@/app/modelPages/IDs";

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
            return <p>Other Pages</p>
    }
}

export function ModalBase(props: {currentTab: string}) {
    return (
        <div className="flex flex-grow flex-1" style={{marginLeft: "25px"}}>
            {tabToRender(props.currentTab)}
        </div>
    );
}