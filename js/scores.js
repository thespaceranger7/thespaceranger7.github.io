"use strict";

// foiegras20121223!

const showScores = async (socres)=>{
    const imgs = {
        bg: 'https://thespaceranger7.github.io/img/quiz5/Scoreboard.jpg',
    }

    clearAllCanvas();

    await new Promise((resolve)=>{
        (async ()=>{
            const canvas = bg;
            canvas.addItem(new CanvasImage(await image.load(imgs.bg), 0, 0, 1920, 1080));
            canvas.draw();

            scores.total = scores.quiz1 + scores.quiz2 + scores.quiz3 + scores.quiz4 + scores.quiz5;
            const ctx = canvas.ctx;
            ctx.textAlign = "center";
            ctx.font = "100px Arial";
            ctx.fillText(`${scores.quiz1} / 8`, 1345, 160);
            ctx.fillText(`${scores.quiz2} / 10`, 1345, 333);
            ctx.fillText(`${scores.quiz3} / 10`, 1345, 507);
            ctx.fillText(`${scores.quiz4} / 12`, 1345, 692);
            ctx.fillText(`${scores.quiz5} / 20`, 1345, 860);
            ctx.fillText(`${scores.total} / 60`, 1345, 1024);

            fg.addEventListener("click", ()=>resolve(), {once: true});
        })();
    });

}


