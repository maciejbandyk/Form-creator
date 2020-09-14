import { IField } from '../../interfaces/ifield';
import { FieldType } from '../../enums/field-type.enum';
import { FieldLabel } from './FieldLabel';

export class EmailField  implements IField {
    constructor(name: string, label: string, value: string | '') {
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }

    Name: string;    
    Label: string;
    Type: FieldType = FieldType.Email;
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

        element.addEventListener('keyup', (ev) => {
            this.Value = ev.target.value;
        });
        element.addEventListener('paste', (ev) => {
            this.Value = ev.target.value;
        });
        element.addEventListener('cut', (ev) => {
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