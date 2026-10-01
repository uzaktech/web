"use client";

import * as s from "./styles";
import * as t from "@/styles/primitive/text";
import { useForm } from "@/context";
import { checkEmptiness } from "@/utils";
import { ChangeEvent, ComponentPropsWithoutRef, MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from "react";

type MainProps = {
	$width?: string,
	$maxWidth?: string,
	label?: string,
	placeholder?: string,
	name: string,
	type?: string,
	onChange?: (e: ChangeEvent<any>) => void,
	setValue?: (v: string) => void,
	regex?: RegExp,
	maxLength?: number,
	scaleToRoot?: boolean,
	required?: boolean,
	regexTest?: {
		regex: RegExp,
		error: string
	}[]
}

export type InputProps = MainProps & ComponentPropsWithoutRef<"input">;

export type TextareaProps = {
	$adaptHeight?: boolean,
	$maxHeight?: string,
	$resize?: string
} & MainProps & ComponentPropsWithoutRef<"textarea">;

// --- useValidation ---
// just validates the values, based on required and regexTest parameters
// ---
const useValidation = ({ required, regexTest }: { required?: boolean; regexTest?: {regex: RegExp; error: string}[] }) => {
	const [error, setError] = useState<0 | 1 | 2>(0);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
 
	const validate = useCallback(
		(value: string, justRemove?: boolean) => {
			let _error: 0 | 1 | 2 = error;
 
			if (required && checkEmptiness(value) && !justRemove) _error = 1;
			else if (required && _error === 1 && !checkEmptiness(value)) _error = 0;
 
			if (regexTest) {
				for (let i = 0; i < regexTest.length; i++) {
					const test = regexTest[i];
 
					if (!test.regex.test(value) && _error === 0 && !justRemove) {
						setErrorMsg(test.error);
						_error = 2;
						break;
					} else if (test.regex.test(value) && test.error === errorMsg && _error === 2) {
						setErrorMsg(null);
						_error = 0;
					}
				}
			}
 
			setError(_error);
 
			return _error === 0;
		},
		[error, errorMsg, required, regexTest]
	);
 
	return { error, errorMsg, validate };
}

// --- useInputChange ---
// is the handle to the onChange event of the fields
// it wraps the custom event with the preset configuration
// ---
const useInputChange = ({regex, maxLength, onChange, setValue, onDirtyValidate}: {
	regex?: RegExp;
	maxLength?: number;
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	setValue?: (v: string) => void;
	onDirtyValidate: (value: string) => void;
}) => {

	return useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const input = e.currentTarget;

		onDirtyValidate(input.value);

		if (!regex) {
			onChange?.(e);
			setValue?.(input.value);
			return;
		}

		setValue?.(input.value);

		const pos = input.selectionStart ?? input.value.length;
		const clean = input.value.replace(regex, "");

		if (maxLength != null && clean.length > maxLength) return input.value = clean.substring(0, maxLength);

		if (clean !== input.value) {
			const diff = input.value.length - clean.length;
			input.value = clean;
			input.setSelectionRange(pos - diff, pos - diff);
		}

		onChange?.(e);
	}, [regex, maxLength, onChange, setValue, onDirtyValidate]);
}

const useRegisterField = (validate: () => boolean, deps: React.DependencyList) => {
	const form = useForm();
	
	useEffect(() => {
		return form.register(validate);
	}, [form, validate, ...deps]);
}

const useFocus = <T extends HTMLElement>(ref: RefObject<T | null>) => {
	const [focused, setFocused] = useState(false);
 
	const focus = useCallback(() => ref.current?.focus(), []);
	const onFocus = useCallback(() => setFocused(true), []);
	const onBlur = useCallback(() => setFocused(false), []);
 
	return { focused, focus, onFocus, onBlur, ref };
}

// --- FieldContainer ---
// presentation only: label, wrapper, error, children.
// no validation logic, no form logic, no input logic.
// ---
const FieldContainer = ({id, label, required, hasError, errorMessage, onBoxClick, $width, $maxWidth, scaleToRoot, children}: 
	{id?: string; label?: string; required?: boolean; hasError: boolean; errorMessage: string | null; onBoxClick: () => void; $width?: string; $maxWidth?: string; scaleToRoot?: boolean; children: React.ReactNode}) => {

	return (
		<s.Root $width={scaleToRoot ? $width : undefined} $maxWidth={scaleToRoot ? $maxWidth : undefined}>
			{label && (
				<t.Label htmlFor={id}>
					{label} {required ? " *" : ""}
				</t.Label>
			)}

			<s.InputBox onClick={onBoxClick} $status={hasError ? 1 : 2}> {children} </s.InputBox>

			{hasError && <s.ErrorText>{errorMessage}</s.ErrorText>}
		</s.Root>
	);
}


// --- Input ---
export const Input = ({ label, placeholder, name, type, onChange, setValue, regex, maxLength, scaleToRoot, required, regexTest, ...props }: InputProps) => {
	const ref = useRef<HTMLInputElement | null>(null);

	const [inputType, setInputType] = useState<string>(type ?? "text");
	
	const { error, errorMsg, validate } = useValidation({required, regexTest});
	const { focused, focus, onBlur, onFocus } = useFocus(ref);

	const passwordToggle = (e: MouseEvent) => {
		const input = ref.current;

		if (input != null) {
			if (input != document.activeElement) e.stopPropagation();

			setInputType(prev => prev === "password" ? "text" : "password");
		}
	}

	const handleChange = useInputChange({regex, maxLength, onChange, setValue, onDirtyValidate: (value) => validate(value, true)});
	
	useRegisterField(() => validate(ref.current?.value ?? ""), [required, regexTest]);

	return (
		<FieldContainer 
			id={name} 
			label={label} 
			required={required}
			hasError={error !== 0} 
			errorMessage={error === 1 ? "This field is required." : errorMsg}
			onBoxClick={focus}
			scaleToRoot={scaleToRoot}
			$width={props.$width} 
			$maxWidth={props.$maxWidth} 
		>
			<s.Input
				ref={ref}
				id={name} 
				name={name}
				type={inputType} 
				placeholder={placeholder}
				onChange={handleChange}
				onFocus={onFocus}
				onBlur={onBlur}
				$width={props.$width} 
				$maxWidth={props.$maxWidth}
				$status={error != 0 ? 1 : 2}
				$smtAside={type == "password"}
				{...props}
			/>

			{type == "password" &&
				<s.PasswordBtn onMouseDown={(e) => e.preventDefault()} onClick={passwordToggle} $focus={focused}>
					{inputType == "password" ? "show" : "hide"}
				</s.PasswordBtn>
			}
		</FieldContainer>
	)
}

// --- Textarea ---
export const Textarea = ({ label, placeholder, name, onChange, setValue, regex, maxLength, regexTest, $adaptHeight, scaleToRoot, required, ...props }: TextareaProps) => {
	const ref = useRef<HTMLTextAreaElement | null>(null);

	const { error, errorMsg, validate } = useValidation({ required, regexTest });
	const { focused, focus, onBlur, onFocus } = useFocus(ref);	

	const handleChange = useInputChange({regex, maxLength, onChange, setValue, onDirtyValidate: (value) => validate(value, true)});

	useRegisterField(() => validate(ref.current?.value ?? ""), [required, regexTest]);

	useEffect(() => {
		const textarea = ref.current;

		if ($adaptHeight && textarea) {
			textarea.style.height = "0px";
			textarea.style.height = `${((textarea.scrollHeight))}px`;
		}
	}, [$adaptHeight, ref, props.defaultValue, props.value])

	return (
		<FieldContainer 
			id={name} 
			label={label} 
			required={required}
			hasError={error !== 0} 
			errorMessage={error === 1 ? "This field is required." : errorMsg}
			onBoxClick={focus}
			scaleToRoot={scaleToRoot}
			$width={props.$width} 
			$maxWidth={props.$maxWidth} 
		>
			<s.Textarea
				ref={ref}
				id={name} 
				name={name}
				placeholder={placeholder}
				onChange={handleChange}
				onFocus={onFocus}
				onBlur={onBlur}
				$width={props.$width}
				$maxWidth={props.$maxWidth}
				$status={error != 0 ? 1 : 2}
				{...props}
			/>
		</FieldContainer>
	)
}