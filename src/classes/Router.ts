export class Router {
    constructor() {

    }

    static getParam(): string {
        const query: string = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query); 
        const id = urlParams.get('id') 
        return id;
    }
}