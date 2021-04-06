import { useEffect, RefObject } from 'react';

export type HandlerProps = {
    node: RefObject<HTMLElement>,
    onInsideClick: Function
}

const useCapture: boolean = true;

function useInsideClickHandler({node, onInsideClick}: HandlerProps)
{
    useEffect(() => {
        
        function handleClick(e: Event)
        {
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
    
    }, [node, onInsideClick]);
}

export default useInsideClickHandler;