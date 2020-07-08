import { FieldType } from "../enums/field-type.enum";

export interface IField {
    Name: string;
    Label: string;
    Type: FieldType;
    Value: string | boolean;
    render(props: any): void;
    getValue(): string;
}