import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface InputType {
  placeholderText: string;
  type: string;
  handleChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  isrequired: boolean;
}

interface InputStyleType {
  isrequired: boolean;
}

const InputStyle = styled.input<InputStyleType>`
  padding: 5px;
  font-size: 12px;
`;

const Input = ({
  placeholderText,
  type,
  handleChangeEvent,
  className,
  value,
  isrequired,
}: InputType) => {
  return (
    <InputStyle
      className={className}
      type={type}
      placeholder={placeholderText}
      onChange={handleChangeEvent}
      value={value}
      required={isrequired}
      isrequired={isrequired}
    />
  );
};

export { Input };
