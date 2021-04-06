import { useEffect, useRef } from 'react';

export type WrapperProps = {
    onOutsideClick: Function,
    children: HTMLElement
}

const useCapture: boolean = true;

function OutsideClickHandlerWrapper({onOutsideClick, children}: WrapperProps) 
{

    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick(e: Event) {
            if (
                node &&
                node.current && 
                e.target instanceof HTMLElement &&
                node.current.contains(e.target)
            ){ return }

            onOutsideClick();
        }
        
        document.addEventListener('mousedown', handleClick, useCapture);

        return () => document.removeEventListener('mousedown', handleClick, useCapture);
    
    }, [onOutsideClick]);

    return <div ref={ node }>{ children }</div>
}

export default OutsideClickHandlerWrapper