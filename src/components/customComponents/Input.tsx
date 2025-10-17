import { CustomInputProps } from "@/types/loginForm";
import React from "react";

const CustomFormInput = ({ label, type, name, options = [], formik, row = 4, ...props }:CustomInputProps) => {
    const { values, errors, touched, handleChange, handleBlur, setFieldValue } = formik;
    const hasError = touched[name] && errors[name]
    const baseclasses = "broder p-2 rounded-md focusoutline-non focus:ring-2 focus:ring-blue-500"

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setFieldValue(name, file)
    }

    return (

        <div>
            {/* label */}
            {
                label && (
                    <label htmlFor={name} className="text-sm font-medium text-gray-500 mb-1 mr-0.5">
                        {label} : 
                    </label>
                )
            }

            {/* input fields */}
            {
                type === "select" ? (
                    <select name={name} id={name} value={values[name]} onChange={handleChange} onBlur={handleBlur} className={`${baseclasses} ${hasError ? "border-red-500" : "border-gray-300"} `}  {...props}>
                        {
                            options?.map((opt) => (
                                <option value={opt?.value} key={opt?.key}>
                                    {opt?.value}
                                </option>
                            ))
                        }
                    </select>
                ) : /* FILE INPUT */
                    type === "file" ? (
                        <input
                            id={name}
                            name={name}
                            type="file"
                            onChange={handleFileChange}
                            onBlur={handleBlur}
                            className={`${baseclasses} ${hasError ? "border-red-500" : "border-gray-300"
                                }`}
                            {...props}
                        />
                    ) :

                        (
                            <input
                                type={type}
                                value={values[name]}
                                name={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={label || name}
                                className={`${baseclasses} ${hasError ? "border-red-500" : "border-gray-300"} `}  {...props}
                            />
                        )
            }

            {/* Error Message */}
            {hasError && (
                <span className="text-xs text-red-500 mt-1">{errors[name]}</span>
            )}

        </div>




    )

}

export default CustomFormInput;