import { LocStorage } from './LocStorage';

export class DocumentList {
    constructor() {
        const localStorage = new LocStorage();
        this.ListOfDocuments = localStorage.getDocuments();
    }

    private ListOfDocuments: string[];

    getDocument(): string[] {
        return this.ListOfDocuments;
    }

    render(container: HTMLElement): void {
        const table = document.createElement('table');
        for (let r = 0; r < this.ListOfDocuments.length; r++) {
            const row = document.createElement('tr');
            
            for (let c = 0; c < 2; c++) {
                let cell = document.createElement('td');
                if(c==0) { cell.appendChild(document.createTextNode(r.toString()));}
                else { cell.appendChild(document.createTextNode(this.ListOfDocuments[r]));}
                row.appendChild(cell);     
            }
            table.appendChild(row);
        }
        container.appendChild(table);
    }
}