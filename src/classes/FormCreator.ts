import { Form } from './Form';
import { LocStorage } from './LocStorage';
import { Components } from './Components';
import { IField } from './../interfaces/ifield';
export class FormCreator {

    constructor() {
        this.componentsHandler = new Components();
        this.fields = [];
    }

    public componentsHandler: Components;
    public fields: IField[];
    public formName: string;

    newForm(): void {
        const buttonsContainer: HTMLElement = document.querySelector('div.row');
        const elementsContainer: HTMLElement = document.querySelector('div.container div.container');
        const controlButtonsContainer: HTMLElement = document.querySelector('div.form-controls');
        const array = ['checkbox', 'date', 'email', 'input', 'select', 'textarea'];
        array.forEach((element) => {
            const button = this.componentsHandler.newButton(element, ['btn', 'btn-outline-info']);
            button.addEventListener('click', () => {
                this.componentsHandler.creatingForm(elementsContainer, element);
            })
            buttonsContainer.appendChild(button);
        })
        const saveButton = this.componentsHandler.newButton('SAVE', ['btn', 'btn-success']);
        saveButton.addEventListener('click', () => {
            this.formName = document.querySelector('input[name=form-name]').value;
            if(this.formName.length === 0 || !this.formName.trim()) {
                alert('Form name must have at least one letter');
            } else {
                this.saveForm();
            }
        })
        const backButton = this.componentsHandler.newButton('BACK', ['btn', 'btn-danger']);
        backButton.addEventListener('click', () => {
            window.location.href='new-document.html';
        })
        controlButtonsContainer.append(backButton, saveButton);
    }

    private saveForm(): void {
        const storage = new LocStorage();
        const newForm = new Form(this.fields);
        storage.saveForm(newForm, this.formName);
        window.location.href = 'new-document.html';
    }

    public addFormElement(element: IField): void {
        this.fields.push(element);
    }
    
}