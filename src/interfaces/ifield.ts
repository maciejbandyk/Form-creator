import { FieldType } from "../enums/field-type.enum";

export interface Field {
    Name: string;
    Label: string;
    Type: FieldType;
    Value: string | boolean;
    render(props: any): void;
}