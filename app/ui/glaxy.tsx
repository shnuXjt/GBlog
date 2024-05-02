'use client'

import clsx from "clsx"
import { useEffect, useRef } from "react";
import { renderThree } from "../lib/render";

interface GlaxyProps {
    classNames: string;
}

export default function Glaxy({classNames}: {classNames?: string}) {
    const node = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(node?.current) {
            const element = node.current;
            renderThree(element.clientWidth, element.clientHeight, element);
        }
    }, [node])
    
    return <div ref={node}  className={clsx(
        "w-full h-full",
        classNames
    )}></div>
}