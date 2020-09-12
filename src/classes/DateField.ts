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
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('form-group');
        new FieldLabel(fieldContainer, 'question-label', this.Label);
        const element = document.createElement('input');
        element.classList.add('form-control');
        element.setAttribute('type', this.Type);
        fieldContainer.appendChild(element);
        container.appendChild(fieldContainer);
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