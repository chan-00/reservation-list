import styled from 'styled-components';
import { Button } from '../atom/button';
// import icon
import MinusIcon from '../../icon/math-minus.svg';
import PlusIcon from '../../icon/math-plus.svg';
// import component
import { Text } from '../atom/text';
import { Dispatch, SetStateAction } from 'react';

interface GuestButtonType {
  className?: string;
  guestCount: number;
  contentsText: string;
  setGuestCount: Dispatch<SetStateAction<number>>;
}

const IconButton = styled(Button)`
  margin: 0 15px;
  padding: 5px 10px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgb(250, 250, 250);
`;

const GuestButtonStyle = styled.div`
  display: flex;
  align-items: center;
`;

const GuestButton = ({
  className,
  contentsText,
  guestCount,
  setGuestCount,
}: GuestButtonType) => {
  const handleMinusClick = () => {
    if (guestCount === 1) {
      return;
    }
    setGuestCount((prev) => prev - 1);
  };
  const handlePlusClick = () => {
    setGuestCount((prev) => prev + 1);
  };

  return (
    <GuestButtonStyle className={className}>
      <Text fontSize="13px">{contentsText}</Text>
      <IconButton btnIcon={MinusIcon} handleClickEvent={handleMinusClick} />
      <Text fontSize="20px">
        <strong>{guestCount}</strong>
      </Text>
      <IconButton btnIcon={PlusIcon} handleClickEvent={handlePlusClick} />
    </GuestButtonStyle>
  );
};

export { GuestButton };
