import React, { useEffect, useRef } from 'react';
import {useState} from 'react'

const cx = (...xs) => xs.filter(Boolean).join(' ');

function SvgIcon () { return (<>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 ml-auto" ><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"></path></svg>
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
          <pre tabIndex={0} className={cx(DefaultClasses.codeBlock.pre)}>
          {!loaded &&
            <code className={cx(DefaultClasses.codeBlock.code, DefaultClasses.codeBlock.placeholder)}>{decoded}</code>
          }
            <code style={{'borderLeft': type == 'Input'? '4px solid rgba(15, 15, 15, 0.2)' : 'unset'}} className={cx(DefaultClasses.codeBlock.code)} ref={ref} />
          </pre>
       </div>
    </div>   
  )
}

import { useLayoutEffect} from "react";


export function WLJSAssets({ children }) {
  const containerRef = useRef(null);
  const disposersRef = useRef([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanup = () => {
      // call registered cleanup functions (LIFO for good measure)
      for (let i = disposersRef.current.length - 1; i >= 0; i--) {
        try { disposersRef.current[i](); } catch (e) { console.error(e); }
      }
      disposersRef.current = [];
      // remove styles we appended
      container
        .querySelectorAll('[data-wljs-style="1"]')
        .forEach((n) => n.remove());
    };

    cleanup();

    // decode
    let decoded = "";
    try { decoded = decodeURIComponent(children); }
    catch { decoded = String(children ?? ""); }
    if (!decoded) return cleanup;

    // parse
    const tpl = document.createElement("template");
    tpl.innerHTML = decoded;

    // 1) append styles at this node (commit phase)
    tpl.content.querySelectorAll("style").forEach((styleNode) => {
      const el = document.createElement("style");
      el.dataset.wljsStyle = "1";
      el.textContent = styleNode.textContent || "";
      container.appendChild(el);
    });

    // 2) run each script body in isolation, in order
    const scripts = Array.from(tpl.content.querySelectorAll("script"));

    // AsyncFunction constructor
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

    const runOne = (code, index) => {
      // per-script cleanup bucket (kept globally so unmount can clean)
      const localDisposers = [];
      const registerCleanup = (fn) => {
        if (typeof fn === "function") {
          localDisposers.push(fn);
          disposersRef.current.push(fn);
        }
      };

      // per-script API; freeze to discourage mutation across scripts
      const api = Object.freeze({
        registerCleanup,
        element: container,
        exports: Object.create(null),
        index, // which script is this (0-based)
      });

      const body = `
        try {
          ${code}
        } catch (e) {
          console.error("[WLJSAssets] script #${index} error:", e);
        }
      `;

      try {
        const fn = new AsyncFunction("api", "el", body);
        // starts synchronously until the first await
        fn(api, container);
      } catch (e) {
        console.error("[WLJSAssets] build/run error for script #"+index+":", e);
      }
    };

    scripts.forEach((s, i) => {
      const code = s.textContent || "";
      if (code.trim()) runOne(code, i);
    });

    return cleanup;
  }, [children]);

  // Anchor where styles get appended
  return <span ref={containerRef} aria-hidden="true" />;
}










