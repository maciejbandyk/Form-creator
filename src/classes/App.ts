import { TextAreaField } from './TextAreaField';
import { SelectField } from './SelectField';
import { EmailField } from './EmailField';
import { DateField } from './DateField';
import { CheckboxField } from './CheckboxField';
import { InputField } from './InputField';
import { Form } from './Form';
import { IField } from './../interfaces/ifield';

export class App {
    constructor() {
        const fields: IField[] = [];
        fields.push(new InputField('input-test', 'Czy podoba Ci się nauka na WSEI?', 'test'));
        fields.push(new CheckboxField('checkbox-test1', 'Czy preferujesz e-learning?','test'));
        fields.push(new CheckboxField('checkbox-test2', 'Checkbox2','test'));
        fields.push(new CheckboxField('checkbox-test3', 'Checkbox3','test'));
        fields.push(new DateField('date-test', 'Data', ''));
        fields.push(new EmailField('email-test', 'E-mail', 'test'));
        fields.push(new SelectField('select-test', 'Wybrany kierunek studiów:', ['Informatyka', 'Ekonometria', 'Psychologia'] ,''));
        fields.push(new TextAreaField('textarea-test', 'Uwagi','test'));
        const formContainer = document.createElement('div');
        document.body.appendChild(formContainer);
        this.DocumentContainer = formContainer;
        const testForm = new Form(fields);
        this.TestFormm = testForm;
    }

    DocumentContainer: HTMLElement;
    TestFormm: Form;

    renderDocument(form: Form) {
        form.render(this.DocumentContainer);
    }
    renderDocumentToEdit(documentObject: any): void {
        const fields: IField[] = [];

        for (const key in documentObject) {
            if (documentObject.hasOwnProperty(key)) {
                const element = documentObject[key];
                for (let i = 0; i < element.length; i++) {
                    switch (element[i].Type) {
                        case 'text':
                            const instance1 = new InputField(element.Name, element.Label, element.Value);
                            Object.assign(instance1, element[i]);
                            fields.push(instance1);
                            break;
                        case 'checkbox':
                            const instance2 = new CheckboxField(element.Name, element.Label, element.Value);
                            Object.assign(instance2, element[i]);
                            fields.push(instance2);
                            break;
                        case 'date':
                            const instance3 = new DateField(element.Name, element.Label, element.Value);
                            Object.assign(instance3, element[i]);
                            fields.push(instance3);
                            break;
                        case 'email':
                            const instance4 = new EmailField(element.Name, element.Label, element.Value);
                            Object.assign(instance4, element[i]);
                            fields.push(instance4);
                            break;
                        case 'radio':
                            const instance5 = new SelectField(element.Name, element.Label, [], element.Value);
                            Object.assign(instance5, element[i]);
                            fields.push(instance5);
                            break;
                        case 'textarea':
                            const instance6 = new TextAreaField(element.Name, element.Label, element.Value);
                            Object.assign(instance6, element[i]);
                            fields.push(instance6);
                            break;
                    
                        default:
                            break;
                    }
                }
            }
        }    
        
        const newFormEdit = new Form(fields);
        newFormEdit.render(this.DocumentContainer);
    }
}
