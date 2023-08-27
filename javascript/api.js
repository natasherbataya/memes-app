class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com/';


    }

    // fetchMemes() {
    //     return fetch(`${this.baseUrl}/get_memes`)
    //         .then(result => result.json())

    // }



    async fetchMemes() {
        const result = await fetch(`${this.baseUrl}/get_memes`);
        const res = await result.json();
        return res
        // const mem = res.data;
        // console.log(mem);

    }




}


