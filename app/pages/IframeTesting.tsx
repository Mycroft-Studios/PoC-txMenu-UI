import {Card, CardContent} from "@/components/ui/card";
import * as React from "react";

export function IframeTesting(props: {Hide: boolean} ) {
    const display = props.Hide ? "none" :  "block"
    return (
        <Card style={{width: "98%", height: "820px", margin: "20px", marginTop: "5px", display: display}}>
            <CardContent className="bg-origin-content" style={{padding: "10px", width: "100%", height: "100%"}}>
               <iframe src="http://95.217.41.201:40121" width="100%" height="100%" frameBorder="0" />
            </CardContent>
        </Card>
    );
}