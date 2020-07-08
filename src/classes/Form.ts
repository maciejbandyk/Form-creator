import { FieldType } from './../enums/field-type.enum';
import { Field } from './../interfaces/ifield';


export class Form {
    constructor(fields: Field[]) {
         this.fieldsArray = fields;
    }

    private fieldsArray: Field[];

    render(pole: HTMLElement) {
        const formDocument = document.createElement("form");
        this.fieldsArray.forEach(field => {field.render(formDocument)});
        pole.appendChild(formDocument);
    }

    getValue() {
        return this.fieldsArray.map(field => {
            return {name: field.Name, type: field.Type, value: field.Value };
        })
    }
}