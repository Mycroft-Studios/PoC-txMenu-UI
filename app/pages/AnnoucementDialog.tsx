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
import {Mail} from "lucide-react";
import * as React from "react";
import {useKeyboardNavigation} from "@/app/hooks/useKeyboardNavigation";

interface ButtonProps {
    selected: boolean,
    setSelected: Function,
    index: number,
}

export function AnnoucementDialog(props: ButtonProps) {
    let trigger= React.useRef<HTMLButtonElement>(null);

    const handleEnter = () => {
        if (!props.selected) return;
        trigger.current?.click();
    };

    useKeyboardNavigation({
        onEnterDown: handleEnter,
        disableOnFocused: false,
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={props.selected ? "secondary" : "ghost"} ref={trigger} className="w-full justify-start" style={{justifyContent: "left"}}>
                    <Mail className="mr-2 h-4 w-4" />Send Announcement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Announcement</DialogTitle>
                    <DialogDescription>
                        Broadcast a message to all players on the server.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="name"
                            className="col-span-4"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}