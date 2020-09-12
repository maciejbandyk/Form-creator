import { LocStorage } from './LocStorage';
import { IField } from './../interfaces/ifield';
import { Router } from './Router';


export class Form {
    constructor(fields: IField[]) {
         this.fieldsArray = fields;
    }

    private fieldsArray: IField[];

    render(container: HTMLElement): void {
        const formDocument: HTMLElement = document.createElement("form");
        formDocument.classList.add("form-horizontal");
        const saveButton = document.createElement('button');
        saveButton.classList.add('btn');
        saveButton.innerHTML = "Save";
        const backwardButton = document.createElement('button');
        backwardButton.classList.add('btn', 'btn-back');
        backwardButton.innerHTML = "Back";
        this.fieldsArray.forEach(field => {field.render(formDocument)});
        formDocument.appendChild(saveButton);
        saveButton.addEventListener('click', (ev) => { 
            ev.preventDefault();
            ev.stopImmediatePropagation();
            if(Router.getParam() != null && !Router.getParam().startsWith('F-')) {
                this.saveEdit(this, Router.getParam());
            }
            else { 
                this.save(this); 
            }
        });
        formDocument.appendChild(backwardButton);
        backwardButton.addEventListener('click', function() {window.location.href = "index.html"});
        container.appendChild(formDocument);
    }

    getValue(): object {
        return this.fieldsArray.map(field => {
            return {type: field.Type, label: field.Label, name: field.Name, value: field.Value };
        })
    }

    saveEdit(data: Form, key: string): void {
        const storage = new LocStorage();
        storage.saveEditedDocument(data, key);
        alert("Document edited");
        window.location.href = "document-list.html";
    }
    
    save(data: Form): void {
        const storage = new LocStorage();
        storage.saveDocument(data);
        alert("Document saved");    
        window.location.href = "index.html";
    }   
}