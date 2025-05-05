import React, { useEffect, useRef } from 'react';
import {useState} from 'react'

function SvgIcon () { return (<>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5 h-5 ml-auto" ><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"></path></svg>
</>)}

export const DefaultClasses = {
  downloadButton: {
    a: 'p-2 text-xs w-full flex text-gray-600 my-2'
  },

  codeBlock: {
    wrapper: 'text-sm px-2 py-2 bg-gray-15 shadow-sm rounded-md mx-2',
    pre: undefined,
    code: undefined,
    placeholder: 'opacity-0'
  }
}
 
/* pls, don't look at here. We don't know react and WLJS Ecosystem was not targeted to be used with JS frameworks */
/* its ugly, but it gonna work, for sure */

export function WLJSStore({json, notebook, kernel}) {

  useEffect( () => {
    console.log('Created store');

    const virtualServer = window.server;
    virtualServer.resetIO();

    const loadKernel = async () => {
      
      let mesh = await fetch(kernel);
      mesh = await mesh.json();
      await virtualServer.loadKernel(mesh);
      virtualServer.flushEvents();
    }

    fetch(json).then((data) => {
      console.warn('Store loaded!');
      data.json().then((result) => {

        virtualServer.loadObjects(result);

        if (kernel) loadKernel();
      });
    });

  });

  if (notebook) {
    return (
      <a href={notebook} className={DefaultClasses.downloadButton.a || ''} >Download original notebook <SvgIcon/></a>
    );
  } 

  return null

}

export function WLJSHTML({children, data}) {
  const markup = { __html:  decodeURIComponent(children)};
  return <div dangerouslySetInnerHTML={markup} />;
}

export function WLJSEditor({children, nid, id, type, display, opts}) {
  const ref = useRef(null);

  const colorMode = 'light';

  const decoded = decodeURIComponent(children);

  const [faded, setFaded]   = useState(opts.Fade);
  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    const element = ref.current;
    console.warn('Create Codemirror');
    console.warn(display);

    
    console.log(decoded);
    

    setLoaded(true);
    let s;
    console.log('Created: '+display);
    if (display == 'print') return;
    if (!window.SupportedCells[display]) {
      console.warn('Not found: '+display); 
      return;
    }   
    if (window.SupportedCells[display].view) s = new window.SupportedCells[display].view({element: element}, decoded);
    

    if (s.editor && opts.Fade) {
   

      ref.current.addEventListener('focusin', () => {
        //console.error('FOCUS');
        setFaded(false);
      });

      ref.current.addEventListener('focusout', () => {
        //console.error('FOCUS');
        setFaded(true);
      });

    }

    return () => {
      if (s) s.dispose();
    }
  }, []);

  return (
    <div className={DefaultClasses.codeBlock.wrapper}>
       <div className={ faded ? "h-fade-20" : ""}>
          <pre tabIndex="0" className={DefaultClasses.codeBlock.pre}>
          {!loaded &&
            <code className={[DefaultClasses.codeBlock.code, DefaultClasses.codeBlock.placeholder].join(' ')}>{decoded}</code>
          }
            <code className={DefaultClasses.codeBlock.code} ref={ref}></code> 
          </pre>
       </div>
    </div>   
  )
}







