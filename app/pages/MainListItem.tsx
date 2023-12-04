import {Button} from "@/components/ui/button";
import * as React from "react";
import {ButtonProps} from "@/app/pages/MainList";
import {useKeyboardNavigation} from "@/app/hooks/useKeyboardNavigation";

interface ItemProps {
    menu: ButtonProps,
    setSelectedMenu: Function,
    selectedMenu: number,
    index: number,
}

export function MainListItem(props: ItemProps) {
    const [selected, setSelected] = React.useState(false)
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    React.useEffect(() => {
        if (props.selectedMenu == props.index) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [props, props.selectedMenu])

    const handleArrowLeft = () => {
        if (!selected) return;
        if (props.menu.options === undefined) return;
        const options = props.menu.options.length;
        if (options === undefined) return;
        const next = selectedMenu - 1;
        setSelectedMenu(next < 0 ? options - 1 : next);
    };

    const handleArrowRight = () => {
        if (!selected) return;
        if (props.menu.options === undefined) return;
        const options = props.menu.options.length;
        if (options === undefined) return;
        const next = selectedMenu + 1;
        setSelectedMenu(next >= options ? 0 : next);
    };

    useKeyboardNavigation({
        onRightDown: handleArrowRight,
        onLeftDown: handleArrowLeft,
        disableOnFocused: false,
    });

    return (
        <Button key={props.menu.name}
                variant={props.selectedMenu == props.index ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => props.setSelectedMenu(props.index)}>
            <div className="flex flex-row">
                {props.menu.icon}
                <strong>{props.menu.name} </strong>
                <p hidden={props.menu.options === undefined}>: {props.menu.options ? props.menu.options[selectedMenu] : "Unknown"}</p>
            </div>
        </Button>
    );
}