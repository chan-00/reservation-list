import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface InputType {
  placeholderText?: string;
  type: string;
  handleChangeEvent?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  required?: boolean;
  readonly?: boolean;
}

const InputStyle = styled.input`
  padding: 5px;
  font-size: 12px;
`;

const Input = ({
  placeholderText = 'initial place',
  type,
  handleChangeEvent,
  className,
  value,
  required = false,
  readonly,
}: InputType) => {
  return (
    <InputStyle
      className={className}
      type={type}
      placeholder={placeholderText}
      onChange={handleChangeEvent}
      value={value}
      required={required}
      readOnly={readonly}
    />
  );
};

export { Input };
