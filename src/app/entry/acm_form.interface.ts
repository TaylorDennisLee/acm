export interface ACMForm {
    form_name: string;
    custom_fields: CustomField[];
}

export interface CustomField {
    field_name: string;
    field_value: string;
}

export interface ACM_Text_Entry {
    field_type: string,
    field_order: number,
    field_name: string,
    field_value: string
}
