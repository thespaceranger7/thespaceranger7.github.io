class Canvas {
    constructor(canvas){ //}, width, height){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this._items = [];

        // // this.width = this.canvas.parentElement.clientWidth;
        // // this.height = this.canvas.parentElement.clientHeight;
        // // this.width = 1920;
        // // this.height = 1080;
        // this.canvas.width = width;
        // // this.canvas.height = height;
        // this.canvas.height = Math.round(width * 1080 / 1920);
        // this.canvas.style.height = this.canvas.height;
        // console.log(this.canvas.width, this.canvas.height);
    }

    //#region accessors
    get items() {
        return this._items;
    }
    //#endregion

    //#region methods
    addItem(item){
        this._items.push(item);
    }

    removeItem(item){
        let start = null;
        this._items.find((i, index) => {
            if (item === i) {
                start = index;
                return true;
            }
            return false
        });

        this._items.splice(start, 1);
    }

    removeAllItems(){
        this._items.splice(0, this._items.length);
    }

    getItemAt(x,y){
        return this._items.find(item => {
            return item.isAt(this.ctx, x, y);
        })
    }
    //#endregion



    //#region drawing
    clear(){
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.clearRect(0, 0, 1920, 1080);
    }

    draw(){
        this._items.map((item)=>{
            item.draw(this.ctx, this.canvas);
        })
    } 
    //#endregion

    addEventListener(event, handler, options){
        this.canvas.addEventListener(event, handler, options);
    }
    removeEventListener(event, handler, options){
        this.canvas.removeEventListener(event, handler, options);
    }
}
