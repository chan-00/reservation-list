import styled from 'styled-components';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface TextAreaType {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextAreaStyle = styled.textarea`
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  font-size: 16px;
`;

// TextArea 아톰 컴포넌트 정의
const TextArea = ({ placeholder, value, setValue }: TextAreaType) => {
  const handleChangeArea = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextAreaStyle
      placeholder={placeholder}
      onChange={handleChangeArea}
      value={value}
    />
  );
};

export { TextArea };
