import { IDataStorage } from "../interfaces/idata-storage";
import { Form } from "./Form";

export class LocStorage implements IDataStorage {

    constructor() {
        this.DataStorage = window.localStorage;   
    }

    DataStorage: any;

    saveDocument(documentObject: Form): string {
        const savedDocument = this.DataStorage.setItem(`document-${Date.now()}`, JSON.stringify(documentObject));
        return savedDocument;
    }    

    saveEditedDocument(documentObject: Form, key: string): string {
        const savedDocument = this.DataStorage.setItem(key, JSON.stringify(documentObject));
        return savedDocument;
    }

    loadDocument(key: string): object {
        const loadedDocument = this.DataStorage.getItem(key);
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

    removeDocument(key: string): void {
        this.DataStorage.removeItem(key);
    }
}