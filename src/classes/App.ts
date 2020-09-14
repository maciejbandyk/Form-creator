import { Deserializer } from './Deserializer';
import { TextAreaField } from './fields/TextAreaField';
import { SelectField } from './fields/SelectField';
import { EmailField } from './fields/EmailField';
import { DateField } from './fields/DateField';
import { CheckboxField } from './fields/CheckboxField';
import { InputField } from './InputField';
import { Form } from './Form';
import { IField } from './../interfaces/ifield';

export class App {
    constructor() {
        const fields: IField[] = [];
        this.populateTestArray(fields);
        this.DocumentContainer = document.getElementById('main');
        this.TestFormm = new Form(fields);
    }

    populateTestArray(fields: IField[]): void{
        fields.push(new InputField('input-test', 'Czy podoba Ci się nauka na WSEI?', 'test'));
        fields.push(new CheckboxField('checkbox-test1', 'Czy preferujesz e-learning?','test'));
        fields.push(new CheckboxField('checkbox-test2', 'Checkbox2','test'));
        fields.push(new CheckboxField('checkbox-test3', 'Checkbox3','test'));
        fields.push(new DateField('date-test', 'Data', ''));
        fields.push(new EmailField('email-test', 'E-mail', 'test'));
        fields.push(new SelectField('select-test', 'Wybrany kierunek studiów:', ['Informatyka', 'Ekonometria', 'Psychologia'] ,''));
        fields.push(new TextAreaField('textarea-test', 'Uwagi','test'));
    }

    DocumentContainer: HTMLElement;
    TestFormm: Form;

    renderDocument(form: Form): void {
        form.render(this.DocumentContainer);
    }

    renderDocumentToEdit(documentObject: object): void {
        const newFormEdit = new Form(Deserializer.Deserialize(documentObject));
        newFormEdit.render(this.DocumentContainer);  
    }
}
