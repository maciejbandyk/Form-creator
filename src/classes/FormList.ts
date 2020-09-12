import { LocStorage } from './LocStorage';

export class FormList {
    constructor() {
        const localStorage = new LocStorage();
        this.ListOfForms = localStorage.getForms();
    }

    private ListOfForms: string[];

    getDocuments(): string[] {
        return this.ListOfForms;
    }

    getDocument(id: string): object {
        let documentObject;
        for (const key of this.ListOfForms) {
            if(key===id) { 
                documentObject = localStorage.getItem(key);
            }
        } 
        
        return JSON.parse(documentObject);
    }

    getLength(): number {
        return this.getDocuments().length;
    }

    removeDocument(id: string): any {
        window.localStorage.removeItem(id);
        window.location.href = "document-list.html";
    }
}