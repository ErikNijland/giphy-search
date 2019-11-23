import React, {useState} from 'react';

export default function useFormInput (initialValue: string) {
  const [ value, setValue ] = useState<string>(initialValue);

  return {
    value,
    onChange: (event: React.FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value),
  };
}