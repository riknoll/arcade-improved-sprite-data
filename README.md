# arcade-improved-sprite-data

This extension is an improved version of [microsoft/arcade-sprite-data](https://github.com/microsoft/arcade-sprite-data). You might be asking "What makes it so improved?"

Here's what:

* Adds tilemap locations as a type that can stored/read
* Adds array versions of the blocks for every type
* Puts all the blocks into their own category in the toolbox instead of cramming them into the Sprites category
* Adds the ability to define and call functions on Sprites. Now you can have your own pseudo-methods in blocks!
* In addition to Sprites, all types (except functions) can also be stored on tilemap locations and objects (i.e. dictionaries in Python terminology)

Because of the objects feature, this extension also effectively replaces [microsoft/arcade-block-objects](https://github.com/microsoft/arcade-block-objects), which is an extension nobody really used because it was a nightmare. This one is much better!

For storing properties on tilemap locations, the properties will persist until you load a new Tilemap. If you load the old tilemap again, all of the properties for each location will be restored.

Note that this extension is not compatible with microsoft/arcade-sprite-data. You can add them both to your project, but the properties stored by them are completely separate (properties written by microsoft/arcade-sprite-data can't be read by this extension and vice versa).

## Developer

Most the blocks in this extension are defined using `scripts/gen.js`. To regenerate `spriteData.ts`, run this from the root of this repo:

```
node scripts/gen.js
```