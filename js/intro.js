"use strict";

async function intro() {
    const imgList = [
        'https://thespaceranger7.github.io/img/lecture/1-%20COVER.jpg',
        'https://thespaceranger7.github.io/img/lecture/2-%20Preface.jpg',
        'https://thespaceranger7.github.io/img/lecture/3-%20TRANSITION.jpg',
        'https://thespaceranger7.github.io/img/lecture/4-%20SOLAR%20SYSTEM%206.jpg',
        'https://thespaceranger7.github.io/img/lecture/5-SS%201.png',
        'https://thespaceranger7.github.io/img/lecture/5-SS%202.png',
        'https://thespaceranger7.github.io/img/lecture/5-SS%203.png',
        'https://thespaceranger7.github.io/img/lecture/6-PLANETS%20.jpg',
        'https://thespaceranger7.github.io/img/lecture/7-%203%20CRITERIA.png',
        'https://thespaceranger7.github.io/img/lecture/8-%20PLUTO.png',
        'https://thespaceranger7.github.io/img/lecture/9-%20Terrestrial%20Planets%201.jpg',
        'https://thespaceranger7.github.io/img/lecture/9-%20Terrestrial%20Planets%202.jpg',
        'https://thespaceranger7.github.io/img/lecture/10-ASTEROID%20BELT%201.png',
        'https://thespaceranger7.github.io/img/lecture/11-Jovian%20Planets%201.jpg',
        'https://thespaceranger7.github.io/img/lecture/11-Jovian%20Planets%202.jpg',
        'https://thespaceranger7.github.io/img/lecture/12-KUIPER%20BELT.png'
    ];
    
    for (let i = 0; i < imgList.length; i++) {
        const img = await image.load(imgList[i]);
        fg.removeAllItems();
        fg.addItem(new CanvasImage(img, 0, 0, 1920, 1080));
        fg.draw();
        await new Promise(resolve=>{
            fg.addEventListener(
                "click",
                ()=>resolve(),
                {once: true}
            );
        })
    }
}

