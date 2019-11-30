import {useState} from "react";
import {IFormInputValue} from '../../types/form-input-value';

export default function useFormInputValue(initialValue: string): IFormInputValue {
  const [ value, setValue ] = useState<string>(initialValue);

  return {
    onChange: (event) => setValue(event.currentTarget.value),
    value,
  };
}
