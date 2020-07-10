import { LocStorage } from './LocStorage';
import { IField } from './../interfaces/ifield';
import { Router } from './Router';


export class Form {
    constructor(fields: IField[]) {
         this.fieldsArray = fields;
    }

    private fieldsArray: IField[];

    render(pole: HTMLElement): void {
        const formDocument: HTMLElement = document.createElement("form");
        formDocument.classList.add("form");
        const saveButton = document.createElement('button');
        saveButton.innerHTML = "Save";
        const backwardButton = document.createElement('button');
        backwardButton.innerHTML = "Back";
        this.fieldsArray.forEach(field => {field.render(formDocument)});
        formDocument.appendChild(saveButton);
        saveButton.addEventListener('click', (ev) => { 
            ev.preventDefault();
            ev.stopImmediatePropagation();
            if(Router.getParam() != null) {
                this.saveEdit(this, Router.getParam());
            }
            else { 
                this.save(this); 
            }
        });
        formDocument.appendChild(backwardButton);
        backwardButton.addEventListener('click', this.back);
        pole.appendChild(formDocument);
    }

    getValue(): object {
        return this.fieldsArray.map(field => {
            return {type: field.Type, label: field.Label, name: field.Name, value: field.Value };
        })
    }

    saveEdit(data: Form, key: string): void {
        const storage = new LocStorage();
        storage.saveEditedDocument(data, key);
        alert("Zapisano edycje dokumentu");
        window.location.href = "index.html";
    }
    
    save(data: Form): void {
        const storage = new LocStorage();
        storage.saveDocument(data);
        alert("Dokument został zapisany");    
        window.location.href = "index.html";
    }   

    back(): void {
        window.location.href = "index.html";
    }   
}