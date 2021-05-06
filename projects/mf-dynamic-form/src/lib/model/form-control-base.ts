
export class FormControlBase {
	value: any;
	key: string;
	class: string;
	label: string;
	required: boolean;
	order: number;
	placeholder: string;
	alphanumeric: boolean;
	controlType: string;
	type: string;
	export: boolean;
	visible: boolean;
	hidden: boolean;
	requiredWhen: any[] | { field: string, value: any }[];
	visibleWhen: { field: string, value: any }[];
	disableWhen: { field: string, value: any }[];
	minLength: number;
	maxLength: number;
	positiveNumberOnly: boolean;
	options: { value: string, label: string }[];
	inputs: any;
	component: string;

	constructor(options: {
		value?: any;
		key?: string;
		export?: boolean;
		visible?: boolean;
		label?: string;
		alphanumeric?: boolean;
		required?: boolean
		requiredWhen?: any[] | { field: string, value: any }[];
		visibleWhen?: { field: string, value: any }[];
		disableWhen?: { field: string, value: any }[];
		order?: number;
		controlType?: string;
		type?: string;
		options?: { value: string, label: string }[],
		minLength?: number;
		hidden?: boolean;
		maxLength?: number;
		positiveNumberOnly?: boolean;
		class?: string;
		placeholder?: string;
		inputs?: any;
		component?: string;
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.required = options.required == undefined ? true : !!options.required
		this.requiredWhen = options.requiredWhen || [];
		this.visibleWhen = options.visibleWhen || [];
		this.disableWhen = options.disableWhen || [];
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
		this.type = options.type || 'text';
		this.maxLength = options.maxLength;
		this.alphanumeric = !!options.alphanumeric;
		this.hidden = !!options.hidden;
		this.minLength = options.minLength;
		this.positiveNumberOnly = options.positiveNumberOnly;
		this.class = options.class;
		this.options = options.options || [];
		this.export = options.export == undefined ? true : options.export;
		this.visible = options.visible == undefined ? true : options.visible;
		this.placeholder = options.placeholder || options.label;
		this.inputs = options.inputs;
		this.component = options.component
	}
}


export type MfForm = {
	debugMode?: boolean,
	steps: MfFormStep[]
	customControls?: any
}

export type MfFormStep = { label?: string, sections: MfFormSection[] };
export type MfFormSection = { label?: string, controls: FormControlBase[] }
