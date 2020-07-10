import { LocStorage } from './LocStorage';

export class DocumentList {
    constructor() {
        const localStorage = new LocStorage();
        this.ListOfDocuments = localStorage.getDocuments();
    }

    private ListOfDocuments: string[];

    getDocuments(): string[] {
        return this.ListOfDocuments;
    }

    getDocument(id: string): object {
        let documentObject;
        for (const key of this.ListOfDocuments) {
            if(key===id) { 
                documentObject = localStorage.getItem(key);
            }
        }
        return JSON.parse(documentObject);
    }

    render(container: HTMLElement): void {
        const table = document.createElement('table');  
        for (let r = 0; r < this.ListOfDocuments.length; r++) {
            const row = document.createElement('tr');
            for (let c = 0; c < 4; c++) {
                let cell = document.createElement('td');
                if(c==0) { cell.appendChild(document.createTextNode((r+1).toString()));}
                else if(c==1) { cell.appendChild(document.createTextNode(this.ListOfDocuments[r]));}
                else if(c==2) { 
                    let penElement = document.createElement('span');
                    penElement.classList.add("fa", "fa-pen", "hov");
                    penElement.addEventListener('click', (ev) => {
                        ev.stopImmediatePropagation();
                        ev.preventDefault();
                        window.location.href= `edit-document.html?id=${this.ListOfDocuments[r]}`;
                    });
                    cell.appendChild(penElement);
                }
                else { 
                    let binElement = document.createElement('span');
                    binElement.classList.add("fa", "fa-trash", "hov");
                    binElement.addEventListener('click', (ev) => {
                        ev.stopImmediatePropagation();
                        ev.preventDefault();
                        this.removeDocument(this.ListOfDocuments[r]);
                    });
                    cell.appendChild(binElement); 
                }
                row.appendChild(cell);     
            }
            table.appendChild(row);
        }
        container.appendChild(table);
    }

    removeDocument(id: string): any {
        window.localStorage.removeItem(id);
        window.location.href = "document-list.html";
    }
}