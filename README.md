# pBlockly
Portable/static Blockly to run Blockly apps (demos) so as to run and customize Blockly apps offline, requiring only a browser (and a text editor), without installing node.js, npm, etc. Extending Blockly to using p5.js is also a plan in progress.

Currently, the Blockly's original directory structure is reorganized by pushing Blockly's directories and files into the lib/blockly directory. P5.js directories/files are stored in the lib/p5 directory.

The content of the lib/blockly directory is obtained by
1. Copying the directories obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/blockly.
1. Add closure directory obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/closure. 

The content of the lib/p5 directory is obtained by
1. Copying the directories obtained by untaring .tgz file which is downloaded at https://www.jsdelivr.com/package/npm/p5.

The original demos directory in the Blockly repository was copied and renamed as blockly-demos, in which the links with ../../  were changed to ../../lib/blockly/, by using the VSCode editor's Replace in files menu for example. The language of Blockly demos are currently set to Japanese, which can be changed to English by replacing ja.js with en.js in the app files appropriately.

Among the examples in the blockly-samples repository, custom-toolbox-codelab and theme-extension-codelab were add to the blockly_demos directory. The other examples requiring to run HTTP server were not included, nor were the examples which were already included in the blockly_demos. 

An attempt to extend to p5.js is in sample1.html in the demos' generator app. Planning to add p5.js blocks using the blockfactory app in the blockly-demos.
