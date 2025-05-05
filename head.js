const scripts = [
    "https://cdn.skypack.dev/twind/shim",
     
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@base/dist/interpreter.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@base/src/core.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-cells@base/src/module.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@base/src/boxes.js",  
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@base/src/metamarkers.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@base/src/objects.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@base/src/frontsubmit.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-js-support@base/src/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-magic-support@base/src/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-mermaid-support@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-sound@master/dist/kernel.js",   
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-inputs@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-html-support@base/src/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-wlx-support@base/src/kernel.js", 
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-sharedlib-mk@base/dist/kernel.js", 
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-sharedlib-d3@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-sharedlib-three@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-manipulate@base/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-revealjs@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@base/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-plotly@base/dist/kernel.js",  
    "https://cdn.jsdelivr.net/gh/JerryI/Mathematica-ThreeJS-graphics-engine@base/dist/kernel.js",
  
  ].map((link) => {
    return {
      tagName: 'script',
      attributes: {
        type: 'module',
        src: link,
        strategy: "beforeInteractive"
      }
    }
  });
  

export const HeaderScripts = scripts;
