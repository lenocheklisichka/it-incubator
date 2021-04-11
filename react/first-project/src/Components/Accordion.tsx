import React from "react";

type AccordionPropsType = {
    collapsed: boolean;
    titleValue: string;
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion Rendering")
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle Rendering")
    return (
        <div>
            <h3 className="nav">{props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    console.log("AccordionBody Rendering")
    return (
        <ul className="accord">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Accordion;