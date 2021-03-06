import { IField } from '../../interfaces/ifield';
import { FieldType } from '../../enums/field-type.enum';
import { FieldLabel } from './FieldLabel';

export class SelectField  implements IField {

    constructor(name: string, label: string, options: string[], value: string | null) {
        this.Name = name;
        this.Label = label;
        this.Options = options;
        this.Value = value;
    }
    
    Name: string;    
    Label: string;
    Options: string[];
    Type: FieldType = FieldType.Selectbox;
    Value: string;
    Input: HTMLSelectElement;
    
    render(container: HTMLElement): void {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('form-group');
        new FieldLabel(fieldContainer, 'question-label', this.Label);
        const element = document.createElement('select');
        element.classList.add('form-control');
        fieldContainer.appendChild(element);
        container.appendChild(fieldContainer);
        this.Options.forEach( (text) => {
            const optionElement = document.createElement('option');
            optionElement.value = text;
            optionElement.innerHTML = text;
            element.appendChild(optionElement);
        })
        element.value = this.Value;
        this.Input = element;
        element.addEventListener('change', (ev) => {
            this.Value = ev.target.value;
        });
    }

    setValue(event: Event): any {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.Value = event.target.value;
    }

    getValue(): string {
        return this.Value;
    }
    
}