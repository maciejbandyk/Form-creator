import { IField } from './../interfaces/ifield';
import { FieldType } from './../enums/field-type.enum';
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
        new FieldLabel(container, 'question-label', this.Label);
        const element = document.createElement('select');
        container.appendChild(element);
        this.Options.forEach( (text) => {
            const optionElement = document.createElement('option');
            optionElement.value = text;
            optionElement.innerHTML = text;
            element.appendChild(optionElement);
        })
        element.value = this.Value;
        this.Input = element;
        element.addEventListener('change', this.setValue);
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