"use client";

import { useState } from "react";
import Image from "next/image";
import { Field, ErrorMessage } from "formik";
import { cn } from "@/lib/utils";
import { Text } from "@/components/common/Text";

// Form Input Component
interface FormInputProps {
  name: string;
  type?: string;
  placeholder: string;
  icon?: string;
  disabled?: boolean;
  className?: string;
}

export function FormInput({
  name,
  type = "text",
  placeholder,
  icon,
  disabled = false,
  className,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <Image
              src={icon}
              alt="input icon"
              width={20}
              height={20}
              className="w-5 h-5 opacity-60"
            />
          </div>
        )}
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg",
            "focus:ring-2 focus:ring-blockchain-green focus:border-transparent",
            "disabled:bg-gray-100 disabled:cursor-not-allowed",
            "placeholder:text-gray-500",
            icon && "pl-12",
            className
          )}
        />
      </div>
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" color="destructive" className="text-red-500 text-sm">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}

// Form Select Component
interface FormSelectProps {
  name: string;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  icon?: string;
  disabled?: boolean;
  className?: string;
}

export function FormSelect({
  name,
  placeholder,
  options,
  icon,
  disabled = false,
  className,
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <Image
              src={icon}
              alt="select icon"
              width={20}
              height={20}
              className="w-5 h-5 opacity-60"
            />
          </div>
        )}
        <Field
          as="select"
          name={name}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg",
            "focus:ring-2 focus:ring-blockchain-green focus:border-transparent",
            "disabled:bg-gray-100 disabled:cursor-not-allowed",
            "appearance-none bg-white",
            icon && "pl-12",
            className
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" className="text-red-500 text-sm">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}

// Form Textarea Component
interface FormTextareaProps {
  name: string;
  placeholder: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export function FormTextarea({
  name,
  placeholder,
  rows = 4,
  disabled = false,
  className,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Field
        as="textarea"
        name={name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-lg resize-none",
          "focus:ring-2 focus:ring-blockchain-green focus:border-transparent",
          "disabled:bg-gray-100 disabled:cursor-not-allowed",
          "placeholder:text-gray-500",
          className
        )}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" className="text-red-500 text-sm">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}

// Form Checkbox Component
interface FormCheckboxProps {
  name: string;
  label: string;
  disabled?: boolean;
  className?: string;
}

export function FormCheckbox({
  name,
  label,
  disabled = false,
  className,
}: FormCheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <Field
        type="checkbox"
        name={name}
        disabled={disabled}
        className={cn(
          "w-4 h-4 text-blockchain-green bg-gray-100 border-gray-300 rounded",
          "focus:ring-blockchain-green focus:ring-2",
          "disabled:cursor-not-allowed",
          className
        )}
      />
      <Text size="sm" className="text-gray-700">
        {label}
      </Text>
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" className="text-red-500 text-sm ml-2">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}

// Form Multi-Select Component for Technologies
interface FormMultiSelectProps {
  name: string;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

export function FormMultiSelect({
  name,
  placeholder,
  options,
  className,
}: FormMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        <Field name={name}>
          {({ field, form }: any) => {
            const selectedOptions = field.value || [];

            const handleToggleOption = (optionValue: string) => {
              const newSelected = selectedOptions.includes(optionValue)
                ? selectedOptions.filter((val: string) => val !== optionValue)
                : [...selectedOptions, optionValue];
              form.setFieldValue(name, newSelected);
            };

            return (
              <>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    "w-full px-4 py-3 border border-gray-300 rounded-lg text-left",
                    "focus:ring-2 focus:ring-blockchain-green focus:border-transparent",
                    "flex justify-between items-center",
                    className
                  )}
                >
                  <span
                    className={
                      selectedOptions.length > 0
                        ? "text-gray-900"
                        : "text-gray-500"
                    }
                  >
                    {selectedOptions.length > 0
                      ? `${selectedOptions.length} selected`
                      : placeholder}
                  </span>
                  <svg
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform",
                      isOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option.value)}
                          onChange={() => handleToggleOption(option.value)}
                          className="w-4 h-4 text-blockchain-green bg-gray-100 border-gray-300 rounded focus:ring-blockchain-green focus:ring-2"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </>
            );
          }}
        </Field>
      </div>
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" className="text-red-500 text-sm">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}

// Form File Upload Component
interface FormFileUploadProps {
  name: string;
  placeholder: string;
  accept?: string;
  disabled?: boolean;
  className?: string;
}

export function FormFileUpload({
  name,
  placeholder,
  accept,
  disabled = false,
  className,
}: FormFileUploadProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Field name={name}>
        {({ form }: any) => (
          <label
            className={cn(
              "w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg",
              "hover:border-blockchain-green cursor-pointer transition-colors",
              "flex flex-col items-center justify-center gap-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <Text size="sm" className="text-gray-600">
              {placeholder}
            </Text>
            <input
              type="file"
              accept={accept}
              disabled={disabled}
              className="hidden"
              onChange={(event) => {
                const file = event.currentTarget.files?.[0];
                form.setFieldValue(name, file);
              }}
            />
          </label>
        )}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => (
          <Text size="sm" className="text-red-500 text-sm">
            {msg}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
}
