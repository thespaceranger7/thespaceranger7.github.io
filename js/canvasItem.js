class CanvasItem {
    // draw(ctx){}
    draw(ctx, canvas){
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.drawImage(this.img,0,0,this.w,this.h);


        // if (this.path) {
        //     ctx.fill(new Path2D(this.path));
        // }

        ctx.restore();
    }

    isAt(ctx, x, y){
        let retval = false;

        if (this.path) {
            ctx.save();

            ctx.translate(this.x, this.y);

            const p = new Path2D(this.path);
            ctx.scale(this.scaleX, this.scaleY);

            retval = ctx.isPointInPath(p, x, y);
            ctx.restore();
        }
        return retval;
    
    }

}
