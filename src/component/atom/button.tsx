import styled from 'styled-components';
import { MouseEvent } from 'react';

interface ButtonType {
  btnIcon?: string;
  text?: string;
  color?: string;
  background?: string;
  handleClickEvent?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

interface ButtonStyleType {
  color: string;
  background: string;
}

const ButtonStyle = styled.button<ButtonStyleType>`
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  
  transition-duration: 0.3s;
  
  cursor: pointer;
`;

const Button = ({
  text,
  handleClickEvent,
  className,
  btnIcon,
  color,
  background,
}: ButtonType) => {
  const preventClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (handleClickEvent) {
      handleClickEvent(e);
    }
  };

  return (
    <ButtonStyle
      className={className}
      onClick={preventClickHandler}
      color={color || 'red'}
      background={background || 'white'}
    >
      {btnIcon && <img src={btnIcon} />}
      {text}
    </ButtonStyle>
  );
};

export { Button, ButtonStyle };
