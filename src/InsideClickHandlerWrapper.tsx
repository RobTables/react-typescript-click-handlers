import { useEffect, useRef } from 'react';

export type WrapperProps = {
    onInsideClick: Function,
    children: HTMLElement
}

const useCapture: boolean = true;

function InsideClickHandlerWrapper({onInsideClick, children}: WrapperProps) 
{

    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick(e: Event) {
            if (
                node &&
                node.current && 
                e.target instanceof HTMLElement &&
                node.current.contains(e.target)
            ){ onInsideClick() }
            
            return            
        }
        
        document.addEventListener('mousedown', handleClick, useCapture);

        return () => document.removeEventListener('mousedown', handleClick, useCapture);
    
    }, [onInsideClick]);

    return <div ref={ node }>{ children }</div>
}

export default InsideClickHandlerWrapper