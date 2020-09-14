import { form } from '../components/new-form/new-form';
import { CheckboxField } from './fields/CheckboxField';
import { TextAreaField } from './fields/TextAreaField';
import { SelectField } from './fields/SelectField';
import { InputField } from './fields/InputField';
import { EmailField } from './fields/EmailField';
import { DateField } from './fields/DateField';
import { IField } from './../interfaces/ifield';
export class Components {

    constructor() {
        
    }

    public findElement(element: string, labelName: string = 'default', options: string[] = []): IField {
        switch (element) {
            case 'checkbox':
                return new CheckboxField('name', labelName, false);
            case 'date':
                return new DateField('name', labelName, '');
            case 'email':
                return new EmailField('name', labelName, '');
            case 'input':
                return new InputField('name', labelName, '');
            case 'select':
                return new SelectField('name', labelName, options, '');
            case 'textarea':
                return new TextAreaField('name', labelName, '');
        
            default:
                break;
        }
    }

    public creatingForm(container: HTMLElement, element: string): void {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('container', 'creating-component', 'border', 'border-primary');
        const containerLabel = document.createElement('h4');
        containerLabel.innerHTML = `${element} element`;
        mainContainer.appendChild(containerLabel);
        const formGroup = this.newFormGroup('Label name:', 'text', 'name-one'); 
        mainContainer.append(formGroup);
        let internalSelectElementHandler: HTMLElement;
        if (element === 'select') {
            internalSelectElementHandler = this.selectOptionsCreator('New option:', 'text', 'option-handler');
            mainContainer.appendChild(internalSelectElementHandler);
        }
        
        const divElement = document.createElement('div');
        divElement.classList.add('row', 'row-buttons');
        const addButton = this.newButton('ADD', ['btn', 'btn-success']);
        addButton.addEventListener('click', (el) => {
            const labelName = formGroup.getElementsByTagName('input')[0].value;
            if(labelName.length === 0 || !labelName.trim()) {
                alert('Label name must have at least 1 letter');
            } else {
                let selectElement: HTMLSelectElement | string[] = internalSelectElementHandler?.getElementsByTagName('select')[0] ?? [] ; 
                const createFieldElement: IField = this.findElement(element, labelName, this.getSelectedItems(selectElement));
                form.addFormElement(createFieldElement);
                mainContainer.remove();
                createFieldElement.render(container);
            }
        })

        const backButton = this.newButton('BACK', ['btn', 'btn-danger']);
        backButton.addEventListener('click', () => {
            mainContainer.remove();
        })
        divElement.append(addButton, backButton);
        mainContainer.appendChild(divElement);  
        container.appendChild(mainContainer);
    }

    private newFormGroup(labelName: string, inputType: string, inputName: string ): HTMLElement {
        const container = document.createElement('div');
        container.classList.add('form-group');
        const label = document.createElement('label');
        label.innerHTML = labelName;
        const input = document.createElement('input');
        input.classList.add('form-control');
        input.setAttribute(inputType, 'text');
        input.setAttribute('name', inputName);
        container.append(label, input);
        return container;
    }

    private selectOptionsCreator(labelName: string, inputType: string, inputName: string ): HTMLElement {
        const container = document.createElement('div');
        container.classList.add('form-group');
        const label = document.createElement('label');
        label.innerHTML = labelName;
        const input = document.createElement('input');
        input.classList.add('form-control');
        input.setAttribute(inputType, 'text');
        input.setAttribute('name', inputName);
        const buttonsRow = document.createElement('div');
        buttonsRow.classList.add('d-flex', 'flex-row-reverse');
        const addButton = this.newButton('ADD', ['btn', 'btn-success']);
        const removeButton = this.newButton('REMOVE', ['btn', 'btn-danger']);
        buttonsRow.append(removeButton, addButton);
        const selectElement = document.createElement('select');
        selectElement.classList.add('form-control');
        container.append(label, input, buttonsRow, selectElement);
        addButton.addEventListener('click', () => {
            if(input.value.length === 0 || !input.value.trim()) {
                alert('Option name must have at least 1 letter');
            } else {
                const newOption = document.createElement('option');
                newOption.text = input.value;
                selectElement.add(newOption);
            }
        })
        removeButton.addEventListener('click', () => {
            if(selectElement.selectedIndex === -1) {
                alert('You have to select option to remove');
            } else {
                selectElement.removeChild(selectElement.options[selectElement.selectedIndex]);
            }
        })
        return container;
    }

    private getSelectedItems(selectField: HTMLSelectElement | string[]): string[] {
        const result: string[] = [];
        if ((selectField as HTMLSelectElement).type) { 
            for (let i = 0; i < selectField.length; i++) {
                let element = selectField[i];
                var optionText = element.textContent;
                result.push(optionText);
              }
        }
        return result;
    }

    public newButton(text: string, classes: string[] = ['btn']): HTMLElement {
        const newButton = document.createElement('button');
        classes.forEach(element => {
            newButton.classList.add(element);
        });
        newButton.innerHTML = text;
        return newButton;
    }
}