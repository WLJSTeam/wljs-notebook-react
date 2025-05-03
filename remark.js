const path = require('path');
const fs = require('fs-extra');
const crypto = require('crypto');

module.exports = function remarkCopyAttachments({ fromDir, publicDir }) {
  return async function transformer(tree, file) {
    const promises = [];



    function hashFilePath(filepath) {
      return crypto.createHash('md5').update(filepath).digest('hex').slice(0, 8);
    }

    const visit = (node) => {
        
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name == 'WLJSStore') {
        for (const attr of node.attributes) {

            
            
          if (attr.type === 'mdxJsxAttribute' && typeof attr?.value?.value === 'string') {
            const val = attr?.value?.value.slice(1,-1);
            
            if (val.startsWith(`./attachments`)) {
                
              const absoluteSrc = path.resolve(path.dirname(file.path), val);
              const filename = path.basename(absoluteSrc);
              const hashed = hashFilePath(absoluteSrc);
              const publicPath = `/wassets/${hashed}-${filename}`;
              const outputPath = path.join(publicDir, publicPath);

              
            
              // Copy file
              promises.push(
                fs.copy(absoluteSrc, outputPath)
              );

              // Rewrite the JSX prop value
              attr.value = publicPath;
            }
          }
        }
      }

      if (node.children) {
        
       
        for (const child of node.children) {
          visit(child);
        }
      } else {
        
      }
    };



    visit(tree);

    await Promise.all(promises);
  };
};