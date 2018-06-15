(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Intro_atlas_", frames: [[679,1082,200,222],[1083,1082,200,220],[881,1082,200,222],[467,1082,210,222],[1285,1082,200,220],[0,0,1920,1080],[0,1082,465,463]]}
];


// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.plataformsMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Egg+AV2QgdAAAAgHIAAhWQAAgHAdAAIalAAQAdAAAAAHIAABWQAAAHgdAAgAGaPbQgdABAAgIIAAhVQAAgHAdgBIalAAQAdABAAAHIAABVQAAAIgdgBgA7LAhQgegBAAgHIAAhUQAAgHAeAAIakAAQAeAAAAAHIAABUQAAAHgeABgADT0RQgeAAAAgIIAAhVQAAgHAeAAIakAAQAdAAAAAHIAABVQAAAIgdAAg");
	this.shape.setTransform(-20,814.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Egg+BO2QgdgBAAgGIAAhWQAAgIAdABIalAAQAdgBAAAIIAABWQAAAGgdABgEAGaBIbQgdAAAAgHIAAhVQAAgIAdAAIalAAQAdAAAAAIIAABVQAAAHgdAAgEgbLA5gQgeAAAAgIIAAhUQAAgIAeAAIakAAQAeAAAAAIIAABUQAAAIgeAAgEADTAktQgeAAAAgHIAAhVQAAgIAeAAIakAAQAdAAAAAIIAABVQAAAHgdAAgEgg+AWGQgdABAAgIIAAhVQAAgHAdgBIalAAQAdABAAAHIAABVQAAAIgdgBgAGaPsQgdAAAAgHIAAhWQAAgHAdAAIalAAQAdAAAAAHIAABWQAAAHgdAAgA7LAxQgeAAAAgHIAAhVQAAgHAeAAIakAAQAeAAAAAHIAABVQAAAHgeAAgADT0AQgeAAAAgIIAAhWQAAgGAeAAIakAAQAdAAAAAGIAABWQAAAIgdAAgEgg+gjJQgdAAAAgHIAAhVQAAgHAdgBIalAAQAdABAAAHIAABVQAAAHgdAAgEAGagpjQgdAAAAgHIAAhWQAAgHAdAAIalAAQAdAAAAAHIAABWQAAAHgdAAgEgbLg4eQgeAAAAgHIAAhWQAAgHAeAAIakAAQAeAAAAAHIAABWQAAAHgeAAgEADThNQQgeAAAAgIIAAhWQAAgGAegBIakAAQAdABAAAGIAABWQAAAIgdAAg");
	this.shape_1.setTransform(0,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plataformsMovie, new cjs.Rectangle(-234,-405,448.1,1359.5), null);


(lib.overlayMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-103.9,0,-254.9).s().p("EgmnA3NQgeAAAAg8MAAAhshQAAg8AeAAMBNPAAAQAeAAAAA8MAAABshQAAA8geAAg");
	this.shape.setTransform(0,-353.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.overlayMovie, new cjs.Rectangle(-250.2,-706.6,500.4,706.6), null);


(lib.GoatMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5.png
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-105,-222);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,-222);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105,-222);

	this.instance_3 = new lib._4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-105,-222);

	this.instance_4 = new lib._5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-105,-222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-222,200,222);


(lib.Footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggJAY+QtVqWAAuoQAAunNVqWQNUqXS1AAQS2AANUKXQNVKWAAOnQAAOotVKWQtUKXy2AAQy1AAtUqXg");

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669900").s().p("A4MSyQqBnyAArAQAAq/KBnyQKCnzOKAAQOLAAKCHzQKBHyAAK/QAALAqBHyQqCHyuLAAQuKAAqCnyg");
	this.shape.setTransform(-3,-226,1,0.373,0,0,0,-3,-170);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("EggJAY+QtVqWAAuoQAAunNVqWQNUqXS1AAQS2AANUKXQNVKWAAOnQAAOotVKWQtUKXy2AAQy1AAtUqXg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Footer, new cjs.Rectangle(-291.1,-226,582.2,452.1), null);


(lib.cloudsMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-919.7,-517.3,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloudsMovie, new cjs.Rectangle(-919.7,-517.3,1839.5,1034.7), null);


(lib.playButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// play
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErC5IAAgcIAcAAIAAg5IhVAAIAAgcIgdAAIAAjjIAdAAIAAgdIEAAAIAAAdIAcAAIAABVIhxAAIAAg5IhWAAIAACqIBWAAIAAg4IBxAAIAABVIgcAAIAAAcIhVAAIAAA5IgdAAIAAAcgARHBkIAAhxIhVAAIAABxIhyAAIAAkcIEdAAIAAAdIAbAAIAABVIgbAAIAAA5IAbAAIAABxgAPyhGIBVAAIAAg5IhVAAgALyBkIAAhxIhWAAIAABxIhxAAIAAj/IAcAAIAAgdIEAAAIAAAdIAcAAIAAD/gAKchGIBWAAIAAg5IhWAAgAhiBkIAAgcIgdAAIAAjjIAdAAIAAgdIEaAAIAAA5IjFAAIAAA5IBVAAIAAA5IhVAAIAAA4IDFAAIAAA5gAkNBkIAAiNIgcAAIAAAcIgdAAIAAAbIgcAAIAAgbIgdAAIAAgcIgcAAIAACNIhyAAIAAkcIByAAIAAAdIAcAAIAAAcIAdAAIAAAdIAcAAIAAgdIAdAAIAAgcIAcAAIAAgdIByAAIAAEcgAtFBkIAAgcIgeAAIAAjjIAeAAIAAgdID/AAIAAAdIAcAAIAADjIgcAAIAAAcgArxArIBVAAIAAiqIhVAAgAybBkIAAgcIgdAAIAAjjIAdAAIAAgdID/AAIAAAdIAdAAIAABVIhxAAIAAg5IhWAAIAACqIBWAAIAAg4IBxAAIAABVIgdAAIAAAcg");
	this.shape.setTransform(0.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEJCkIAAgaIAZAAIAAgyIhMAAIAAgZIgZAAIAAjJIAZAAIAAgZIDjAAIAAAZIAZAAIAABMIhkAAIAAgzIhMAAIAACXIBMAAIAAgyIBkAAIAABLIgZAAIAAAZIhLAAIAAAyIgaAAIAAAagAPLBYIAAhkIhMAAIAABkIhlAAIAAj7ID8AAIAAAZIAZAAIAABMIgZAAIAAAyIAZAAIAABkgAN/g+IBMAAIAAgzIhMAAgAKcBYIAAhkIhMAAIAABkIhkAAIAAjiIAZAAIAAgZIDjAAIAAAZIAZAAIAADigAJQg+IBMAAIAAgzIhMAAgAhXBYIAAgZIgZAAIAAjJIAZAAIAAgZID7AAIAAAyIivAAIAAAzIBKAAIAAAyIhKAAIAAAyICvAAIAAAygAjuBYIAAh9IgaAAIAAAZIgZAAIAAAYIgZAAIAAgYIgZAAIAAgZIgZAAIAAB9IhlAAIAAj7IBlAAIAAAZIAZAAIAAAZIAZAAIAAAaIAZAAIAAgaIAZAAIAAgZIAaAAIAAgZIBlAAIAAD7gArmBYIAAgZIgaAAIAAjJIAaAAIAAgZIDiAAIAAAZIAaAAIAADJIgaAAIAAAZgAqbAmIBMAAIAAiXIhMAAgAwVBYIAAgZIgZAAIAAjJIAZAAIAAgZIDjAAIAAAZIAZAAIAABMIhlAAIAAgzIhLAAIAACXIBLAAIAAgyIBlAAIAABLIgZAAIAAAZg");
	this.shape_1.setTransform(0.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("A67l/IGrgoIDWgNYBIgFBHgFBHgEIDXgHYBHgCBHgDBIgBIDWgBYBIAABHgBBHABIDWAFYBHADBHABBIADIDWAMYBHAEBHADBIAFIDVASYBHAHBHAFBHAHIGqAxYABAAAAAAABAAIAAAAYAaABAYAEAUAJYALAEAJAFAIAGYAHAHAHAHAFAIYAGAJADAJADALYACAFABAGABAFIAAACIAAACIABAGIABAKIADAVIABAKIABAFYAAAAAAACAAgCIAAABIAAADIADApYABAOACAOAAANIACApYAAANABANAAAOIgBAoYgBANAAAOAAANIgDApIgCAUIAAAKIgBAFYAAAAAAACAAgCIAAACIAAACIgFApIgGAqIgCAUYgBADABgFAAABIAAABIgBADIgBAFYAAAEgBABgBACYAAACgBACgBACYgBADAAACgCACYgCAEgCAEgDAEYgFAHgHAGgIAFYgIAFgJAFgLADYgKAEgMACgMACYgGABgFAAgHABIgVACIgpADIlMAdYgOABgNACgOABIgqACIhSAFIimAKIhTAFYgbABgcACgbAAIimAGIimAFYgcABgbACgcAAIhTAAIlLAEIlLgCIhTgBYgcAAgcgCgbAAIimgFIimgFYg3gCg3gEg4gCIimgJIhSgEYgOgBgOAAgOgBIgpgDIlMgZYgbgCgdgBgXgEYgMgDgNgDgLgEYgLgDgKgFgKgGYgTgMgMgQgIgVYgDgKgBgKgCgPIgGgpIgFgqIAAgCYAAgBAAACAAgCIAAgBIgBgFIgBgKIgCgVIgDgqYgCgOAAgNgBgOYgBgagCgbAAgcIAAgpYAAgOABgNABgOIABgpYABgNACgPABgNYACgbAFgaAMgWYAHgLAHgKAKgJYAJgJALgIALgGYAYgNAagHAbgFIAAAAA68mJYgcADgcAFgbAMYgNAGgNAIgLAJYgMAJgKAMgIAMYgJANgFAOgFAOIgDALYgBADgBAEgBADIgBAFIgBAGIgBAKYgCAOgDANgCAPIgEAqYgBAOgCAOgBAOIgCAqYgCAcAAAcAAAbYAAAOgBAOABAOIACAqIAAAVIABAKIAAAFIAAACIAAACIAAACIAEAqIADApYABANABASAFAQYAJAgAWAfAbATYAcATAeALAeAGYAfAHAbACAcADIFLAlIAqAFYANABAOABAOABIBTAHICnANIBTAHYAcACAbADAcABICnAIICnAIYAbACAcABAcABIBUABIFNAGIFNgGIBUgBYAcgBAbgCAcgBICngIICngJYAbgBAcgCAcgCIBTgHICngNIBTgGIAqgDYAOgBAOgCANgCIFLghIAqgFIAVgCYAHAAAIgBAHgCYAQgCAQgEAQgFYAPgFAQgIAPgKYAPgKAOgNALgPYAGgIAEgIAEgIYACgEACgFACgEYABgEACgEABgFYABgFACgGAAgCIABgFIABgDIAAgBYAAAAABgGgBACIADgVIAEgpIAFgqIAAgCIABgEIAAgFIABgLIABgVIACgrYABgOAAgOAAgOIAAgqYAAgOgBgOAAgPIgCgrYgBgOgCgNgBgOIgEgqIAAgCIAAgEIgBgGIgCgKIgCgUIgCgLIAAgFIgBgCIAAgEYgCgIgBgIgDgIYgEgQgHgRgKgPYgKgPgMgNgOgLYgOgLgPgIgQgGYgfgMgfgFgegBIACAAImsgrYhHgFhIgFhHgFIjXgPYhHgEhIgChIgDIjWgJYhIgChIAAhHgBIjWgCYhIABhIAChHABIjXAEYhIADhHAFhIADIjWALYhIAFhHAHhHAGIjXARImqAxIAAAA");
	this.shape_2.setTransform(0.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("A6vF9QiWgRgNhsQgHg0gEgyQgPi1APiXIAHg1QARh7CSgSQaKjKbWDVQCVAHASB5IAHA3QASCmgOCmQgFA2gIA2QgQBmiEANQtpBetkAAQtSAAtOhag");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("A67l/IGrgoIDWgNYBIgFBHgFBHgEIDXgHYBHgCBHgDBIgBIDWgBYBIAABHgBBHABIDWAFYBHADBHABBIADIDWAMYBHAEBHADBHAFIDWASYBHAHBHAFBHAHIGqAxYABAAAAAAABAAIAAAAYAaABAYAEAUAJYAKAEAKAFAIAGYAHAHAHAHAFAIYAFAJAEAJADALYADAKABALACAPIAFApIADAoIACAUIABAVIACAoIAAApIAAAUIAAAUIgBAoIgDApIgBAUIgCAUIgFApIgFAoIgDAUIgCAJYAAAEgBABgBACYAAACgBACgBACYgBADgBACgBACYgCAEgCAEgDAEYgFAHgHAGgIAFYgIAFgJAFgLADYgKAEgMACgMACYgGABgFAAgHABIgVACIgpADIlMAdYgOABgOACgNABIgqACIhSAFIimAKIhTAFYgbABgcACgbAAIimAGIimAFYgcABgbACgcAAIhTAAIlLAEIlLgCIhTgBYgcAAgcgCgbAAIimgFIimgFYg3gCg4gEg3gCIimgJIhSgEYgOgBgOAAgOgBIgpgDIlMgZYgbgCgdgBgXgEYgMgDgNgDgLgEYgLgDgKgFgKgGYgTgMgMgQgIgVYgDgKgCgLgCgOIgFgqYgDgbgDgbgDgbYgCgcgDgbgBgbYgEg2AAg3ACg3IACgpIAEgpYABgbAGgaAMgWYAGgLAIgKAKgJYAJgJALgIALgGYAYgNAagHAbgFIAAAAA68mJYgcADgcAFgbAMYgNAGgNAIgMAJYgLAJgKAMgIAMYgJANgFAOgFAOIgDALYgBADgBAEgBADIgBAFIgBAGIgBAKIgHAqIgEAqYgGA4gDA4ABA3YgBAcABAcABAcYABAcACAcACAcIAEAqYABAMABASAFAQYAJAgAWAfAbATYAcATAeALAeAGYAfAHAbACAcADIFLAlIAqAFYANABAOABAOABIBTAHICnANIBTAHYAcACAbADAcABICnAIICnAIYAbACAcABAcABIBTABIFOAGIFNgGIBUgBYAcgBAbgCAcgBICngIICngJYAbgBAcgCAcgCIBTgHICngNIBTgGIAqgDYAOgCANgBAOgCIFLghIAqgFIAVgCYAHAAAIgBAHgCYAQgCAQgEAQgFYAPgFAQgIAPgKYAPgKAOgNALgPYAFgIAFgIAEgIYACgEACgFACgEYABgEACgEABgFYABgFACgGAAgCIACgMIADgVIAFgqIAEgrIACgVIABgVIACgrIABgqIAAgUIAAgWIgBgqIgCgrIgCgVIgCgVIgEgrIgFgpIgCgLIAAgFIgBgCIAAgEYgCgIgBgIgDgIYgEgQgHgRgKgPYgKgPgMgNgOgLYgOgLgPgIgQgGYgfgMgfgFgfgBIADAAImsgrYhHgFhIgFhHgFIjXgPYhHgEhIgChIgDIjXgJYhHgChIAAhIgBIjVgCYhIABhIAChHABIjXAEYhIADhHAFhIADIjWALYhIAFhHAHhIAGIjWARImqAxIAAAA");
	this.shape_4.setTransform(0.9,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("A6vF9QiWgRgNhsQgikTAejUQARh7CSgSQaKjKbWDVQCVAHASB5QAkD1gmD6QgQBmiEANQtpBetkAAQtSAAtOhag");
	this.shape_5.setTransform(0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("A4GlYIF+gjIDAgMYBAgDA/gFBAgDIDAgGYBAgCA/gDBAgBIDAgBYBAABBAgBBAABIC+AFYBAACBAABBAADIC/ALYBAADA/ADBAAFIC/AQIC/ARIF8AsYABAAABAAAAAAIABAAYAWABAVAEASAHYAJAEAIAEAGAGYAHAFAGAGAEAHYAFAHADAJADAJYACAJABAJACANIAEAlIADAkYADAXAAAZABAYIABAkIAAASIgBASIgBAkIgCAkIgCASIgBASIgEAkIgFAkIgDASIgBAIYgBADgBABAAACIgBACIgBADYgBACAAACgBACYgCADgCADgCADYgFAHgFAFgHAEYgHAFgIADgJADYgJADgKADgLABYgFABgFAAgGABIgSACIglADIkpAZYgZADgYABgZACIhKAEIiUAIIhKAFYgZABgYACgZAAIiUAFIiVAEYgYABgZABgZABIhKAAIknAEIkpgDIhKAAYgZAAgZgCgYAAIiVgEIiUgEYgxgCgygDgxgDIiUgHYgygDgxgBgygEIkogWIglgCIgIgBIgKgBYgGgBgFgBgFAAYgLgCgKgDgKgDYgKgEgJgEgIgFYgRgKgLgOgGgRYgDgJgBgKgCgNIgFglYgNhhgHhhAEhiIABglIADgkYACgZAEgWALgUYAGgKAHgJAIgIYAIgIAKgHAKgFYAVgMAXgGAYgFIAAAAA4HliYgZADgZAFgYAKYgMAFgMAHgKAIYgLAJgJAKgHALYgIAMgFAMgEANIgDAKYgBADgBADgBADIgBAFYAAACAAABAAACIgCAJIgGAlIgEAmYgFAygDAyABAxYgBAZABAZABAaYABAZABAZACAZIADAlYABALABAQAEAPYAIAeAVAcAZARYAZASAcAJAbAGYAGACAIABAGABIAJACIABAAIACAAIADAAIAEABIAlAEIEpAiIAlAEYAMACANAAAMACIBKAGICVAMIBLAGYAZACAYACAZABICVAIICWAHYAYABAZACAZABIBLABIErAFIEpgFIBLgCYAZAAAZgCAZgBICVgHICVgIYAZgBAZgCAZgCIBKgGICVgMIBLgGYAZgCAYgCAZgCIEogfIAlgEIATgCYAGAAAIgBAHgBYAOgDAOgDAOgFYAPgFAOgHAOgJYAOgJANgMAKgOYAFgHAEgIAEgHYACgEABgEABgEIADgGIACgGYABgFABgFAAgCIACgLIADgTIAFgmIADgmIACgTIABgTIACgmIAAgmIABgSIgBgTIgBgmYgBgagBgZgDgaIgEgmIgFglYgBgLgCgQgEgPYgFgPgGgPgJgNYgJgOgLgMgNgKYgNgKgOgHgOgGYgdgLgcgEgbgBIACAAIl/gmIjAgNIi/gNYhAgEhBgChAgCIjAgIYhAgChAABhAgBIi/gCYhAAAhAADhAABIjBAEYhAAChAAEhAADIi/ALYhAAEhAAGhAAFIjAAQIl9AsIAAAA");
	this.shape_6.setTransform(1,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("A36FUQiGgPgMhgQgfj2Abi9QAQhvCCgQQXai0YcC+QCGAGAQBsQAgDbgiDgQgOBbh3AMQsMBUsIAAQr4AAr1hRg");
	this.shape_7.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.1,-48.6,384.3,101);


(lib.aboutButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// play
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJzChIAAggIggAAIAAkBIAgAAIAAggIFBAAIAABAIjhAAIAABBIBgAAIAAA/IhgAAIAABAIDhAAIAABBgAGyChIAAiBIhhAAIAACBIiAAAIAAlBIFCAAIAAAgIAgAAIAABhIggAAIAAA/IAgAAIAACBgAFRgfIBhAAIAAhBIhhAAgAiwChIAAlBIFBAAIAAAgIAgAAIAABhIggAAIAAA/IAgAAIAABhIggAAIAAAggAgvBgIBfAAIAAhAIhfAAgAgvgfIBfAAIAAhBIhfAAgAoSChIAAggIggAAIAAkBIAgAAIAAggIEhAAIAAAgIAhAAIAAEBIghAAIAAAggAmxBgIBgAAIAAjAIhgAAgAuzChIAAhBIDgAAIAAhAIjBAAIAAggIgfAAIAAiAIAfAAIAAggIFCAAIAABAIjhAAIAABBIDAAAIAAAfIAhAAIAACBIghAAIAAAgg");
	this.shape.setTransform(-1.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AIYCKIAAgcIgbAAIAAjbIAbAAIAAgcIETAAIAAA3IjAAAIAAA3IBSAAIAAA3IhSAAIAAA3IDAAAIAAA3gAFzCKIAAhuIhSAAIAABuIhuAAIAAkTIETAAIAAAcIAbAAIAABSIgbAAIAAA3IAbAAIAABugAEhgbIBSAAIAAg3IhSAAgAiWCKIAAkTIESAAIAAAcIAbAAIAABSIgbAAIAAA3IAbAAIAABSIgbAAIAAAcgAgoBTIBRAAIAAg3IhRAAgAgogbIBRAAIAAg3IhRAAgAnFCKIAAgcIgbAAIAAjbIAbAAIAAgcID4AAIAAAcIAbAAIAADbIgbAAIAAAcgAlyBTIBSAAIAAilIhSAAgAsqCKIAAg3IDAAAIAAg3IilAAIAAgcIgbAAIAAhtIAbAAIAAgcIETAAIAAA3IjAAAIAAA3IClAAIAAAbIAbAAIAABuIgbAAIAAAcg");
	this.shape_1.setTransform(-1.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("A67l/IGrgoIDWgNYBIgFBHgFBHgEIDXgHYBHgCBHgDBIgBIDWgBYBIAABHgBBHABIDWAFYBHADBHABBIADIDWAMYBHAEBHADBIAFIDVASYBHAHBHAFBHAHIGqAxYABAAAAAAABAAIAAAAYAaABAYAEAUAJYALAEAJAFAIAGYAHAHAHAHAFAIYAGAJADAJADALYACAFABAGABAFIAAACIAAACIABAGIABAKIADAVIABAKIABAFYAAAAAAACAAgCIAAABIAAADIADApYABAOACAOAAANIACApYAAANABANAAAOIgBAoYgBANAAAOAAANIgDApIgCAUIAAAKIgBAFYAAAAAAACAAgCIAAACIAAACIgFApIgGAqIgCAUYgBADABgFAAABIAAABIgBADIgBAFYAAAEgBABgBACYAAACgBACgBACYgBADAAACgCACYgCAEgCAEgDAEYgFAHgHAGgIAFYgIAFgJAFgLADYgKAEgMACgMACYgGABgFAAgHABIgVACIgpADIlMAdYgOABgNACgOABIgqACIhSAFIimAKIhTAFYgbABgcACgbAAIimAGIimAFYgcABgbACgcAAIhTAAIlLAEIlLgCIhTgBYgcAAgcgCgbAAIimgFIimgFYg3gCg3gEg4gCIimgJIhSgEYgOgBgOAAgOgBIgpgDIlMgZYgbgCgdgBgXgEYgMgDgNgDgLgEYgLgDgKgFgKgGYgTgMgMgQgIgVYgDgKgBgKgCgPIgGgpIgFgqIAAgCYAAgBAAACAAgCIAAgBIgBgFIgBgKIgCgVIgDgqYgCgOAAgNgBgOYgBgagCgbAAgcIAAgpYAAgOABgNABgOIABgpYABgNACgPABgNYACgbAFgaAMgWYAHgLAHgKAKgJYAJgJALgIALgGYAYgNAagHAbgFIAAAAA68mJYgcADgcAFgbAMYgNAGgNAIgLAJYgMAJgKAMgIAMYgJANgFAOgFAOIgDALYgBADgBAEgBADIgBAFIgBAGIgBAKYgCAOgDANgCAPIgEAqYgBAOgCAOgBAOIgCAqYgCAcAAAcAAAbYAAAOgBAOABAOIACAqIAAAVIABAKIAAAFIAAACIAAACIAAACIAEAqIADApYABANABASAFAQYAJAgAWAfAbATYAcATAeALAeAGYAfAHAbACAcADIFLAlIAqAFYANABAOABAOABIBTAHICnANIBTAHYAcACAbADAcABICnAIICnAIYAbACAcABAcABIBUABIFNAGIFNgGIBUgBYAcgBAbgCAcgBICngIICngJYAbgBAcgCAcgCIBTgHICngNIBTgGIAqgDYAOgBAOgCANgCIFLghIAqgFIAVgCYAHAAAIgBAHgCYAQgCAQgEAQgFYAPgFAQgIAPgKYAPgKAOgNALgPYAGgIAEgIAEgIYACgEACgFACgEYABgEACgEABgFYABgFACgGAAgCIABgFIABgDIAAgBYAAAAABgGgBACIADgVIAEgpIAFgqIAAgCIABgEIAAgFIABgLIABgVIACgrYABgOAAgOAAgOIAAgqYAAgOgBgOAAgPIgCgrYgBgOgCgNgBgOIgEgqIAAgCIAAgEIgBgGIgCgKIgCgUIgCgLIAAgFIgBgCIAAgEYgCgIgBgIgDgIYgEgQgHgRgKgPYgKgPgMgNgOgLYgOgLgPgIgQgGYgfgMgfgFgegBIACAAImsgrYhHgFhIgFhHgFIjXgPYhHgEhIgChIgDIjWgJYhIgChIAAhHgBIjWgCYhIABhIAChHABIjXAEYhIADhHAFhIADIjWALYhIAFhHAHhHAGIjXARImqAxIAAAA");
	this.shape_2.setTransform(0.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("A6vF9QiWgRgNhsQgHg0gEgyQgPi1APiXIAHg1QARh7CSgSQaKjKbWDVQCVAHASB5IAHA3QASCmgOCmQgFA2gIA2QgQBmiEANQtpBetkAAQtSAAtOhag");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("A67l/IGrgoIDWgNYBIgFBHgFBHgEIDXgHYBHgCBHgDBIgBIDWgBYBIAABHgBBHABIDWAFYBHADBHABBIADIDWAMYBHAEBHADBHAFIDWASYBHAHBHAFBHAHIGqAxYABAAAAAAABAAIAAAAYAaABAYAEAUAJYAKAEAKAFAIAGYAHAHAHAHAFAIYAFAJAEAJADALYADAKABALACAPIAFApIADAoIACAUIABAVIACAoIAAApIAAAUIAAAUIgBAoIgDApIgBAUIgCAUIgFApIgFAoIgDAUIgCAJYAAAEgBABgBACYAAACgBACgBACYgBADgBACgBACYgCAEgCAEgDAEYgFAHgHAGgIAFYgIAFgJAFgLADYgKAEgMACgMACYgGABgFAAgHABIgVACIgpADIlMAdYgOABgOACgNABIgqACIhSAFIimAKIhTAFYgbABgcACgbAAIimAGIimAFYgcABgbACgcAAIhTAAIlLAEIlLgCIhTgBYgcAAgcgCgbAAIimgFIimgFYg3gCg4gEg3gCIimgJIhSgEYgOgBgOAAgOgBIgpgDIlMgZYgbgCgdgBgXgEYgMgDgNgDgLgEYgLgDgKgFgKgGYgTgMgMgQgIgVYgDgKgCgLgCgOIgFgqYgDgbgDgbgDgbYgCgcgDgbgBgbYgEg2AAg3ACg3IACgpIAEgpYABgbAGgaAMgWYAGgLAIgKAKgJYAJgJALgIALgGYAYgNAagHAbgFIAAAAA68mJYgcADgcAFgbAMYgNAGgNAIgMAJYgLAJgKAMgIAMYgJANgFAOgFAOIgDALYgBADgBAEgBADIgBAFIgBAGIgBAKIgHAqIgEAqYgGA4gDA4ABA3YgBAcABAcABAcYABAcACAcACAcIAEAqYABAMABASAFAQYAJAgAWAfAbATYAcATAeALAeAGYAfAHAbACAcADIFLAlIAqAFYANABAOABAOABIBTAHICnANIBTAHYAcACAbADAcABICnAIICnAIYAbACAcABAcABIBTABIFOAGIFNgGIBUgBYAcgBAbgCAcgBICngIICngJYAbgBAcgCAcgCIBTgHICngNIBTgGIAqgDYAOgCANgBAOgCIFLghIAqgFIAVgCYAHAAAIgBAHgCYAQgCAQgEAQgFYAPgFAQgIAPgKYAPgKAOgNALgPYAFgIAFgIAEgIYACgEACgFACgEYABgEACgEABgFYABgFACgGAAgCIACgMIADgVIAFgqIAEgrIACgVIABgVIACgrIABgqIAAgUIAAgWIgBgqIgCgrIgCgVIgCgVIgEgrIgFgpIgCgLIAAgFIgBgCIAAgEYgCgIgBgIgDgIYgEgQgHgRgKgPYgKgPgMgNgOgLYgOgLgPgIgQgGYgfgMgfgFgfgBIADAAImsgrYhHgFhIgFhHgFIjXgPYhHgEhIgChIgDIjXgJYhHgChIAAhIgBIjVgCYhIABhIAChHABIjXAEYhIADhHAFhIADIjWALYhIAFhHAHhIAGIjWARImqAxIAAAA");
	this.shape_4.setTransform(0.9,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("A6vF9QiWgRgNhsQgikTAejUQARh7CSgSQaKjKbWDVQCVAHASB5QAkD1gmD6QgQBmiEANQtpBetkAAQtSAAtOhag");
	this.shape_5.setTransform(0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("A4GlYIF+gjIDAgMYBAgDA/gFBAgDIDAgGYBAgCA/gDBAgBIDAgBYBAABBAgBBAABIC+AFYBAACBAABBAADIC/ALYBAADA/ADBAAFIC/AQIC/ARIF8AsYABAAABAAAAAAIABAAYAWABAVAEASAHYAJAEAIAEAGAGYAHAFAGAGAEAHYAFAHADAJADAJYACAJABAJACANIAEAlIADAkYADAXAAAZABAYIABAkIAAASIgBASIgBAkIgCAkIgCASIgBASIgEAkIgFAkIgDASIgBAIYgBADgBABAAACIgBACIgBADYgBACAAACgBACYgCADgCADgCADYgFAHgFAFgHAEYgHAFgIADgJADYgJADgKADgLABYgFABgFAAgGABIgSACIglADIkpAZYgZADgYABgZACIhKAEIiUAIIhKAFYgZABgYACgZAAIiUAFIiVAEYgYABgZABgZABIhKAAIknAEIkpgDIhKAAYgZAAgZgCgYAAIiVgEIiUgEYgxgCgygDgxgDIiUgHYgygDgxgBgygEIkogWIglgCIgIgBIgKgBYgGgBgFgBgFAAYgLgCgKgDgKgDYgKgEgJgEgIgFYgRgKgLgOgGgRYgDgJgBgKgCgNIgFglYgNhhgHhhAEhiIABglIADgkYACgZAEgWALgUYAGgKAHgJAIgIYAIgIAKgHAKgFYAVgMAXgGAYgFIAAAAA4HliYgZADgZAFgYAKYgMAFgMAHgKAIYgLAJgJAKgHALYgIAMgFAMgEANIgDAKYgBADgBADgBADIgBAFYAAACAAABAAACIgCAJIgGAlIgEAmYgFAygDAyABAxYgBAZABAZABAaYABAZABAZACAZIADAlYABALABAQAEAPYAIAeAVAcAZARYAZASAcAJAbAGYAGACAIABAGABIAJACIABAAIACAAIADAAIAEABIAlAEIEpAiIAlAEYAMACANAAAMACIBKAGICVAMIBLAGYAZACAYACAZABICVAIICWAHYAYABAZACAZABIBLABIErAFIEpgFIBLgCYAZAAAZgCAZgBICVgHICVgIYAZgBAZgCAZgCIBKgGICVgMIBLgGYAZgCAYgCAZgCIEogfIAlgEIATgCYAGAAAIgBAHgBYAOgDAOgDAOgFYAPgFAOgHAOgJYAOgJANgMAKgOYAFgHAEgIAEgHYACgEABgEABgEIADgGIACgGYABgFABgFAAgCIACgLIADgTIAFgmIADgmIACgTIABgTIACgmIAAgmIABgSIgBgTIgBgmYgBgagBgZgDgaIgEgmIgFglYgBgLgCgQgEgPYgFgPgGgPgJgNYgJgOgLgMgNgKYgNgKgOgHgOgGYgdgLgcgEgbgBIACAAIl/gmIjAgNIi/gNYhAgEhBgChAgCIjAgIYhAgChAABhAgBIi/gCYhAAAhAADhAABIjBAEYhAAChAAEhAADIi/ALYhAAEhAAGhAAFIjAAQIl9AsIAAAA");
	this.shape_6.setTransform(1,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("A36FUQiGgPgMhgQgfj2Abi9QAQhvCCgQQXai0YcC+QCGAGAQBsQAgDbgiDgQgOBbh3AMQsMBUsIAAQr4AAr1hRg");
	this.shape_7.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.1,-48.6,384.3,101);


(lib.brandMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(-100.9,-100.5,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.brandMovie, new cjs.Rectangle(-100.9,-100.5,201.9,201), null);


(lib.controlsMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('game.html', '_parent');
		});
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(5).call(this.frame_17).wait(1));

	// aboutButton
	this.instance = new lib.aboutButton();
	this.instance.parent = this;
	this.instance.setTransform(0.1,73.2,1.012,1.012,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.aboutButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:0.76,scaleY:0.76,y:55,alpha:1},12,cjs.Ease.get(1)).wait(1));

	// playButton
	this.instance_1 = new lib.playButton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-62.5,1.24,1.24);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.playButton(), 3);

	this.button_1 = new lib.playButton();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(0,-47,0.931,0.931);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.playButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.button_1}]},12).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:0.93,scaleY:0.93,y:-47,alpha:1},12,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-127.1,482.1,129.6);


(lib.AnimationMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Brand
	this.instance = new lib.brandMovie();
	this.instance.parent = this;
	this.instance.setTransform(-1.1,-15.5,1.697,1.697,0,0,0,-0.1,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1,x:-1,alpha:1},19,cjs.Ease.get(-1)).wait(41));

	// Overlay
	this.instance_1 = new lib.overlayMovie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.3,191.7,1,1,0,0,0,-0.1,-353.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).wait(41));

	// Goat
	this.instance_2 = new lib.GoatMovie();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.7,0,0.73,0.73,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:-111,scaleX:0.72,scaleY:0.72,x:3.1,y:-98.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:2.2,y:-116.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1,y:-134.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-0.6,y:-153.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-2.8,y:-171},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-5.5,y:-188.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-8.9,y:-206.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-13.2,y:-224.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-18.8,y:-241.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-26.2,y:-258.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-36.4,y:-273.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-51.1,y:-284.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-69.7,y:-284.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-86.1,y:-273.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-99.1,y:-259.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-109.7,y:-242.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-118.7,y:-224.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-126.4,y:-206.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-133,y:-187.8},0).wait(1).to({x:-129.2,y:-210.4},0).wait(1).to({x:-125.3,y:-233.1},0).wait(1).to({x:-121,y:-255.8},0).wait(1).to({x:-115.7,y:-278.3},0).wait(1).to({x:-109.3,y:-300.5},0).wait(1).to({x:-101.3,y:-322.1},0).wait(1).to({x:-91.3,y:-342.9},0).wait(1).to({x:-78.7,y:-362.3},0).wait(1).to({x:-63.2,y:-379.2},0).wait(1).to({x:-44.6,y:-392.6},0).wait(1).to({x:-23.4,y:-401.2},0).wait(1).to({x:-0.8,y:-404.7},0).wait(1).to({x:23,y:-403.5},0).wait(1).to({x:44.6,y:-396.5},0).wait(1).to({x:63.3,y:-383.5},0).wait(1).to({x:77.7,y:-365.7},0).wait(1).to({x:88,y:-345.1},0).wait(1).to({x:95.1,y:-323},0).wait(1).to({x:99.8,y:-300.4},0).wait(1).to({x:103.1,y:-277.8},0).wait(1).to({x:97.6,y:-297.5},0).wait(1).to({x:89.9,y:-316.5},0).wait(1).to({x:80.2,y:-334.6},0).wait(1).to({x:68.4,y:-351.4},0).wait(1).to({x:54.3,y:-366.3},0).wait(1).to({x:37.5,y:-378.1},0).wait(1).to({x:18.3,y:-385.1},0).wait(1).to({x:-2,y:-385.7},0).wait(1).to({x:-21.6,y:-379.9},0).wait(1).to({x:-39.5,y:-369.9},0).wait(1).to({x:-55.6,y:-357.2},0).wait(1).to({x:-70,y:-342.5},0).wait(1).to({x:-82.7,y:-326.4},0).wait(1).to({x:-94,y:-309.3},0).wait(1).to({x:-104,y:-291.3},0).wait(1).to({x:-112.7,y:-272.6},0).wait(1).to({x:-120.2,y:-253.5},0).wait(1).to({x:-126.4,y:-233.9},0).wait(1).to({x:-131.1,y:-213.9},0).wait(1).to({x:-134,y:-193.7},0).wait(1));

	// Plataforms
	this.instance_3 = new lib.plataformsMovie();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9,-472,0.785,0.785);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:-374.4,alpha:1},19,cjs.Ease.get(0.94)).to({y:-9.3},40).wait(1));

	// Background
	this.instance_4 = new lib.Footer();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,279.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.86,scaleY:0.86,y:569.7},19).to({_off:true},1).wait(40));

	// clouds
	this.instance_5 = new lib.cloudsMovie();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,369.8,1,1,0,0,0,0,517.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:517.3,scaleX:0.78,scaleY:0.78,y:369.7},19,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-919.7,-789.9,1839.5,1334.9);


// stage content:
(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Controls
	this.instance = new lib.controlsMovie();
	this.instance.parent = this;
	this.instance.setTransform(250.2,646.7,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Animation
	this.instance_1 = new lib.AnimationMovie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.1,432.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.6,42.6,1839.5,1334.9);
// library properties:
lib.properties = {
	id: '19BE60EB560549D3B4C2194DC9A3819B',
	width: 500,
	height: 800,
	fps: 24,
	color: "#00CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Intro_atlas_.png?1528639081530", id:"Intro_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['19BE60EB560549D3B4C2194DC9A3819B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;