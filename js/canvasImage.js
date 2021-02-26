class CanvasImage extends CanvasItem {
    constructor(img, x, y, w, h, id, scaleX, scaleY, path) {
        super();
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w ? w : img.width;
        this.h = h ? h : img.height;
        this.id = id;
        this.scaleX = scaleX ? scaleX : 1;
        this.scaleY = scaleY ? scaleY : 1;
        this.path = path;
    }

    // get x() {return this._x;}
    // set x(value) {this._x = value;}

    // draw(ctx){
    //     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // }
}