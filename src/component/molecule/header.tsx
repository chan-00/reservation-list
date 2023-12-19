import styled from 'styled-components';
import { ReactNode, MouseEvent } from 'react';
import { Button } from '../atom/button';
// import icon src
import CloseIcon from '../../icon/close.svg';

const HeaderStyle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;

const Title = styled.p`
  font-size: 25px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const CloseButtonStyle = styled(Button)`
  position: absolute;
  right: 10px;
`;

interface HeaderType {
  className?: string;
  handleCloseClickEvent?: (e: MouseEvent<HTMLButtonElement>) => void;
  headerText: string;
  children: ReactNode;
}

const Header = ({
  className,
  handleCloseClickEvent,
  headerText,
  children,
}: HeaderType) => {
  return (
    <HeaderStyle className={className}>
      {children}
      <Title>{headerText}</Title>
      <CloseButtonStyle
        btnIcon={CloseIcon}
        handleClickEvent={handleCloseClickEvent}
      />
    </HeaderStyle>
  );
};

export { Header };
