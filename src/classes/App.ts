import { TextAreaField } from './TextAreaField';
import { SelectField } from './SelectField';
import { EmailField } from './EmailField';
import { DateField } from './DateField';
import { CheckboxField } from './CheckboxField';
import { InputField } from './InputField';
import { Form } from './Form';
import { Field } from './../interfaces/ifield';

export class App {
    constructor() {
        const fields: Field[] = [];
        fields.push(new InputField('input-test', 'test1', 'test'));
        fields.push(new CheckboxField('checkbox-test1', 'test2','test'));
        fields.push(new CheckboxField('checkbox-test2', 'test3','test'));
        fields.push(new CheckboxField('checkbox-test3', 'test4','test'));
        fields.push(new DateField('date-test', 'test5', ''));
        fields.push(new EmailField('email-test', 'test6', 'test'));
        fields.push(new SelectField('select-test', 'test7', 'test'));
        fields.push(new TextAreaField('textarea-test', 'test8','test'));

        const formContainer = document.createElement('div');
        document.body.appendChild(formContainer);
        const testForm = new Form(fields);
        testForm.render(formContainer);
        console.log(testForm.getValue());
    }
}
