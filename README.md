# react-typescript-click-handlers

A collection of click handlers for React 16+

## Handlers

You can choose from both a **Click Handler Hook** or a **Click Handler Wrapper**. The difference being how the handler is implemented. Neither approach has a benefit over the other and it is simply personal preference of which to use.

## Hooks

In the hook approach, you will use `useRef` to pass a `RefObject` to the hook.

**useOutsideClickHandler**
```
import { useRef } from 'react';
import { useOutsideClickHandler } from 'react-typescript-click-handlers';

function OutsideClickHandlerHookExample()
{
    const node = useRef(null);
    
    const onOutsideClick = () => console.log("outside click");
    
    useOutsideClickHandler({node, onOutsideClick});
    
    return <div ref={ node }>Inner Content</div>
}
```

## Wrappers

In the wrapper approach, you will wrap your component(s) in the handler component.

**InsideClickHandlerWrapper**
```
import { useRef } from 'react';
import { InsideClickHandlerWrapper } from 'react-typescript-click-handlers';

function InsideClickHandlerWrapperExample()
{   
    return (
      <InsideClickHandlerWrapper onInsideClick={ () => console.log("inside click") }>
        <div>Inner Content</div>
      </InsideClickHandlerWrapper>
    )
}
```

## Other Available Handlers

As of the latest commit you have the choice of **Inner** or **Outer** click handlers. 

The **Inner** click handlers accept a `function` to direct how it must respond when a user clicks on a component or any of its children.

**useInsideClickHandler**
```
import { useRef } from 'react';
import { useInsideClickHandler } from 'react-typescript-click-handlers';

function InsideClickHandlerHookExample()
{
    const node = useRef(null);
    
    const onInsideClick = () => console.log("inside click");
    
    useInsideClickHandler({node, onInsideClick});
    
    return <div ref={ node }>Inner Content</div>
}
```

The **Outer** click handlers accept a `function` to direct how it must repond when a use clicks anywhere that is not a component or any of its children.

**OutsideClickHandlerWrapper**
```
import { useRef } from 'react';
import { OutsideClickHandlerWrapper } from 'react-typescript-click-handlers';

function OutsideClickHandlerWrapperExample()
{   
    return (
      <OutsideClickHandlerWrapper onOutsideClick={ () => console.log("outside click wrapper") }>
        <div>Inner Content</div>
      </OutsideClickHandlerWrapper>
    )
}
```
