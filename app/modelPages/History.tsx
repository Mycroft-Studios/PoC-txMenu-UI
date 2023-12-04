import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import React from "react";

export function History() {
    return (
        <div>
            <p className="text-xl">Related History</p>
            <div className="flex flex-row gap-0">
                <div className={"flex flex-col space-x-2 bg-secondary mt-1 pr-2 border-l-4 border-l-accent"} style={{marginTop: "5px", fontSize: "15px"}}>
                    <div>
                        <strong className="ml-2">WARNED by </strong>
                        <strong>Mycroft</strong>
                    </div>
                    <div>
                        <p className="ml-2">This is the reason.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}