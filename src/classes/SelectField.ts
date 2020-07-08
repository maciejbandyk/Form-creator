import { IField } from './../interfaces/ifield';
import { FieldType } from './../enums/field-type.enum';
import { FieldLabel } from './FieldLabel';

export class SelectField  implements IField {

    constructor(name: string, label: string, value: string | null) {
        
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    
    Name: string;    
    Label: string;
    Type: FieldType = FieldType.Selectbox;
    Value: string;
    Input: HTMLInputElement;
    
    render(container: HTMLElement): void {
        new FieldLabel(container, 'question-label', this.Label);
        const element = document.createElement('input');
        element.setAttribute('type', this.Type);
        container.appendChild(element);
        element.value = this.Value;
        this.Input = element;
        element.addEventListener('change', this.setValue);
    }

    setValue(event: Event): any {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.Value = this.Input.value;
    }

    
}