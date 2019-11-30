import React from "react";

export interface IFormInputValue {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}
