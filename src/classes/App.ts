import { Deserializer } from './Deserializer';
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
        const newFormEdit = new Form(Deserializer.Deserialize(documentObject));
        newFormEdit.render(this.DocumentContainer);
    }
}
