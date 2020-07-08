export interface DataStorage {
    saveDocument(params: any): string;
    loadDocument(param: string): object;
    getDocuments(): number[];
}