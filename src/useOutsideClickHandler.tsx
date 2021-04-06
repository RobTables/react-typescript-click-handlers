import { useEffect, RefObject } from 'react';

export type HandlerProps = {
    node: RefObject<HTMLElement>,
    onOutsideClick: Function
}

const useCapture: boolean = true;

function useOutsideClickHandler({node, onOutsideClick}: HandlerProps)
{
    useEffect(() => {
        
        function handleClick(e: Event)
        {
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
    
    }, [node, onOutsideClick]);
}

export default useOutsideClickHandler;