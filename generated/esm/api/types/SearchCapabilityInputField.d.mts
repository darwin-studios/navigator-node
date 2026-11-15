export interface SearchCapabilityInputField {
    name: string;
    /** JSON fields require X-Darwin-Input-Contract-Version: 2. Omitted or unsupported profiles retain the legacy field projection; this header grants no execution authority. */
    valueType: SearchCapabilityInputField.ValueType;
    description: string | null;
    required: boolean;
    allowedValues: SearchCapabilityInputField.AllowedValues.Item[];
    format: string | null;
    minLength: number | null;
    maxLength: number | null;
    minimum: number | null;
    maximum: number | null;
    minItems: number | null;
    maxItems: number | null;
}
export declare namespace SearchCapabilityInputField {
    /** JSON fields require X-Darwin-Input-Contract-Version: 2. Omitted or unsupported profiles retain the legacy field projection; this header grants no execution authority. */
    const ValueType: {
        readonly String: "string";
        readonly Number: "number";
        readonly Integer: "integer";
        readonly Boolean: "boolean";
        readonly StringList: "string_list";
        readonly NumberList: "number_list";
        readonly IntegerList: "integer_list";
        readonly BooleanList: "boolean_list";
        readonly Json: "json";
    };
    type ValueType = (typeof ValueType)[keyof typeof ValueType];
    type AllowedValues = AllowedValues.Item[];
    namespace AllowedValues {
        type Item = string | number | boolean;
    }
}
