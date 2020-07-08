import { IField } from './../interfaces/ifield';
import { FieldType } from './../enums/field-type.enum';
import { FieldLabel } from './FieldLabel';

export class DateField  implements IField {
    
    constructor(name: string, label: string, value: string | null) {
        
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    Name: string;    
    Label: string;
    Type: FieldType = FieldType.Date;
    Value: string;
    Input: HTMLInputElement;
    
    render(container: HTMLElement): void {
        new FieldLabel(container, 'question-label', this.Label);
        const element = document.createElement('input');
        element.setAttribute('type', this.Type);
        container.appendChild(element);
        element.value = this.Value;
        this.Input = element;

        element.addEventListener('keyup', this.setValue);
        element.addEventListener('paste', this.setValue);
        element.addEventListener('cut', this.setValue);
    }

    setValue(event: Event): any {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.Value = this.Input.value;
    }

    
}