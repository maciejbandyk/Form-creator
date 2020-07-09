import { IDataStorage } from "../interfaces/idata-storage";

export class LocStorage implements IDataStorage {

    constructor() {
        this.DataStorage = window.localStorage;   
    }

    private DataStorage: any;

    saveDocument(documentObject: object): string {
        const savedDocument = this.DataStorage.setItem(`document-${Date.now()}`, JSON.stringify(documentObject));
        return savedDocument;
    }    

    loadDocument(param: string): object {
        const loadedDocument = this.DataStorage.getItem(`document-${param}`);
        return loadedDocument;
    }

    getDocuments(): string[] {
        const documents: object = {...this.DataStorage};
        const documentsArray: string[] = [];
        for(let key in documents) {
            if (!documents.hasOwnProperty(key)) continue;
            documentsArray.push(key);
        }
        return documentsArray;
    }
}