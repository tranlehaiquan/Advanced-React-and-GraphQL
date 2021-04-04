import React, { useState } from "react";

export interface FormValues {
  [field: string]: any;
}

const useForm = <Values extends FormValues = FormValues>(
  initialValue: Values
): {
  values: Values;
  onChange: React.ChangeEventHandler;
  resetForm: () => void;
  clearForm: () => void;
} => {
  const [values, setValues] = useState<Values>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value, name, type, files } = e.target;

    if (type === "number") {
      if (isNaN(Number.parseInt(value)) && value.length) return;
      setValues({
        ...values,
        [name]: Number.parseInt(value),
      });
    }

    if (type === "file") {
      console.log(files[0]);
      setValues({
        ...values,
        [name]: files[0],
      });
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  const clearForm = () => {
    const emptyValues = Object.fromEntries(
      Object.entries(initialValue).map(([key, value]) => [key, ""])
    );

    setValues(emptyValues as Values);
  };

  return {
    values,
    onChange,
    resetForm,
    clearForm,
  };
};

export default useForm;
