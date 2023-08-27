class View {
    constructor({ onNewText, onNewMemImgName }) {
        this.selectNode = document.getElementById('select__box');
        this.topInputNode = document.getElementById('top__input');
        this.belowInputNode = document.getElementById('below__input');
        this.memImgNode = document.getElementById('mem__img');
        this.topTextNode = document.getElementById('text__top');
        this.belowTextNode = document.getElementById('text__below');
        // this.previeWrapperNode = document.getElementById('preview__wrapper');

        this.onNewText = onNewText;
        this.onNewMemImgName = onNewMemImgName;

        this.topInputNode.addEventListener('input', this.handleInput);
        this.belowInputNode.addEventListener('input', this.handleInput);
        this.selectNode.addEventListener('change', this.handleSelect);

    }

    renderMemes(memes) {
        this.topTextNode.innerHTML = memes.topText;
        this.belowTextNode.innerHTML = memes.belowText;

    }

    renderSelect(memesImg) {
        memesImg.data.memes.forEach(memImg => {
            this.selectNode.innerHTML += `<option value="Выберите изображение">${memImg.name}</option>`
        });
    }

    renderImg(memImgUrl) {
        this.memImgNode.setAttribute("src", `${memImgUrl}`);
    }

    handleInput = () => {
        const topText = this.topInputNode.value;
        const belowText = this.belowInputNode.value;

        this.onNewText(topText, belowText)
    }

    handleSelect = () => {
        const memImgName = this.selectNode.value;

        this.onNewMemImgName(memImgName)

    }




}