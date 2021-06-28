# pBlockly
Portable Blockly, simplified Blockly to run Blockly apps (demos/samples/games) as local as possible.

Currently, the Blockly's original directory structure is reorganized by pushing Blockly's directories and files into the lib/blockly directory. P5.js directories are stored in the lib/p5 directory.

The content of the lib/blockly directory is obtained by
1. Copying the directories under the node_modules directory after running "npm install blockly".
1. Copying the directories obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/blockly.
1. Add closure directory obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/closure. 

The content of the lib/p5 directory is obtained by
1. Copying the directories obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/p5.

In the files in blockly-demos, the links with ../../  were changed to ../../lib/blockly/, by using the VSCode editor's Replace in files menu.

The language of Blockly demos are currently set for Japanese. 
