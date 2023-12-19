import styled from 'styled-components';
import { ReactNode } from 'react';
// import type
import { pxType } from '../../type/size/px';

interface TextType {
  className?: string;
  children?: ReactNode;
  fontSize?: pxType;
  bold?: boolean;
}

interface TextStyleType {
  fontSize: pxType;
  bold: string;
}

const TextStyle = styled.span<TextStyleType>`
  display: inline-block;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold};
`;

const Text = ({ className, children, fontSize, bold = false }: TextType) => {
  return (
    <TextStyle
      className={className}
      fontSize={fontSize ?? '12px'}
      bold={bold ? 'bold' : 'normal'}
    >
      {children}
    </TextStyle>
  );
};

export { Text };
