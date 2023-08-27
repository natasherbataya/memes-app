class Controller {
    constructor() {
        this.model = new Model({
            onMemesChanged: this.handleModelMemesChanged,
            onMemesImgChanged: this.handleModelMemesImgChange,
            onMemImgChanged: this.handleModelMemImgChange
        });

        this.view = new View({
            onNewText: this.handleViewNewText,
            onNewMemImgName: this.handleViewNewMemImgName
        });

        this.api = new API();
    }

    handleModelMemesChanged = (memes) => {
        this.view.renderMemes(memes);
    }

    handleViewNewText = (topText, belowText) => {
        this.model.addMemes(topText, belowText);
    }

    handleModelMemesImgChange = (memesImg) => {
        this.view.renderSelect(memesImg);
    }

    handleModelMemImgChange = (memImgUrl) => {
        this.view.renderImg(memImgUrl);
    }

    handleViewNewMemImgName = (memesImg, memImgName) => {
        this.model.getMemesImg(memesImg, memImgName);
    }

    init() {
        this.api.fetchMemes()
            .then(memesImg => {
                this.model.setMemesImg(memesImg);
            })
    }

}