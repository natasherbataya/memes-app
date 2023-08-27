class Model {
    constructor({ onMemesChanged, onMemesImgChanged, onMemImgChanged }) {
        this.memesImg = [];
        this.memes = {};
        this.onMemesChanged = onMemesChanged;
        this.onMemesImgChanged = onMemesImgChanged;
        this.onMemImgChanged = onMemImgChanged;

    }



    addMemes(topText, belowText) {
        this.memes = {
            topText,
            belowText
        };
        this.onMemesChanged(this.memes);
    };

    getMemes() {
        return this.memes;
    }

    setMemesImg(memesImg) {
        this.memesImg = memesImg;
        this.onMemesImgChanged(this.memesImg);
    }

    getMemesImg(memImgName) {
        let memImgUrl;
        this.memesImg.data.memes.forEach(mem => {
            if (mem.name == memImgName) {
                memImgUrl = mem.url;
            }
            // console.log(mem.url)
            return memImgUrl;

        });

        this.onMemImgChanged(memImgUrl);
    }
}