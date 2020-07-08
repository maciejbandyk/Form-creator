import { IField } from './../interfaces/ifield';
import { FieldType } from './../enums/field-type.enum';
import { FieldLabel } from './FieldLabel';

export class TextAreaField  implements IField {
    constructor(name: string, label: string, value: string) {
        
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }

    Name: string;    
    Label: string;
    Type: FieldType = FieldType.Textlargebox;
    Value: string;
    Input: HTMLTextAreaElement;

    render(container: HTMLTextAreaElement): void {
        new FieldLabel(container, 'question-label', this.Label);
        const element = document.createElement('textarea');
        element.setAttribute('type', this.Type);
        container.appendChild(element);     
        this.Input = element;
        element.addEventListener('keyup', this.setValue);
        element.addEventListener('paste', this.setValue);
        element.addEventListener('cut', this.setValue);
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