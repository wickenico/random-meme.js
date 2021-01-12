/* --------------------------------------------------------------
Script: random-meme.js
Author: Nico Wickersheim
Version: 1.0.0

Description:
Displays a random meme every time the script is executed.
Widget is large for optimal visualization.

Changelog:

1.0.0: Initialization
-------------------------------------------------------------- */
const url = `https://meme-api.herokuapp.com/gimme`
const req = new Request(url)
const res = await req.loadJSON()
const memeUrl = res.url;
const i = new Request(memeUrl);
const img = await i.loadImage()


let widget = createWidget(img)
if (config.runsInWidget) {
  // create and show widget
  Script.setWidget(widget)
  Script.complete()
}
else {
  widget.presentLarge()
}

// Assemble widget layout 
function createWidget(img) {
  let w = new ListWidget()
  w.backgroundColor = new Color("#1A1A1A")

  w.addSpacer(1)

  let image = w.addImage(img)
  image.centerAlignImage()

  w.addSpacer(1)
  
  w.setPadding(0, 0, 0, 0)
  return w
}