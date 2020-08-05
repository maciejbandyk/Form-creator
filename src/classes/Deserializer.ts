import { IField } from './../interfaces/ifield';
import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { SelectField } from './SelectField';
import { TextAreaField } from './TextAreaField';

export class Deserializer {
    
    constructor() {
        
    }
    
    static Deserialize(documentObject: any): IField[] {
        const newFields: IField[] = [];
        for (const key in documentObject) {
            if (documentObject.hasOwnProperty(key)) {
                const element = documentObject[key];
                for (let i = 0; i < element.length; i++) {
                    switch (element[i].Type) {
                        case 'text':
                            const instance1 = new InputField(element.Name, element.Label, element.Value);
                            Object.assign(instance1, element[i]);
                            newFields.push(instance1);
                            break;
                        case 'checkbox':
                            const instance2 = new CheckboxField(element.Name, element.Label, element.Value);
                            Object.assign(instance2, element[i]);
                            newFields.push(instance2);
                            break;
                        case 'date':
                            const instance3 = new DateField(element.Name, element.Label, element.Value);
                            Object.assign(instance3, element[i]);
                            newFields.push(instance3);
                            break;
                        case 'email':
                            const instance4 = new EmailField(element.Name, element.Label, element.Value);
                            Object.assign(instance4, element[i]);
                            newFields.push(instance4);
                            break;
                        case 'radio':
                            const instance5 = new SelectField(element.Name, element.Label, [], element.Value);
                            Object.assign(instance5, element[i]);
                            newFields.push(instance5);
                            break;
                        case 'textarea':
                            const instance6 = new TextAreaField(element.Name, element.Label, element.Value);
                            Object.assign(instance6, element[i]);
                            newFields.push(instance6);
                            break;
                    
                        default:
                            break;
                    }
        return newFields;
                }
            }
        }
    }
}
        
