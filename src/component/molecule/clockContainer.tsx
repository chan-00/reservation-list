import styled from 'styled-components';
// import component
import { Button } from '../atom/button';
import { Text } from '../atom/text';
// import icon
import ArrowUpIcon from '../../icon/chevron-up.svg';
import ArrowDownIcon from '../../icon/chevron-down.svg';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';

const ClockContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

const ClockStyle = styled.div`
  display: inline-block;
  text-align: center;
  height: 100%;
  margin-right: 10px;

  & > * {
    display: block;
    margin: 10px auto;
  }

  &:first-child > span {
    padding-left: 15px;
  }

  &:last-child {
    margin-left: 20px;
  }
`;

interface ClockContainerType {
  time: Date;
  setTime: Dispatch<SetStateAction<Date>>;
}

const ClockContainer = ({ time, setTime }: ClockContainerType) => {
  const [hour, setHour] = useState<number>(time.getHours());
  const [minute, setMinute] = useState<number>(time.getMinutes());
  const [amPm, setAmPm] = useState<string>(hour >= 12 ? 'PM' : 'AM');

  useEffect(() => {
    setTime((prevTime) => {
      const updatedTime = new Date(prevTime);
      updatedTime.setHours(hour, minute);
      return updatedTime;
    });
  }, [hour, minute]);

  const handleUpClick = (setState) => {
    setState((prev) => prev + 1);
  };
  const handleDownClick = (setState) => {
    setState((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleAmPmClick = () => {
    if (hour >= 12) {
      setHour(hour - 12);
      setAmPm('AM');
    } else {
      setHour(hour + 12);
      setAmPm('PM');
    }
  };

  return (
    <ClockContainerStyle>
      <ClockStyle>
        <Button
          btnIcon={ArrowUpIcon}
          handleClickEvent={() => handleUpClick(setHour)}
        />
        <Text fontSize="30px">
          {(hour % 12 ? hour % 12 : '12').toString().padStart(2, '0')} :
        </Text>
        <Button
          btnIcon={ArrowDownIcon}
          handleClickEvent={() => handleDownClick(setHour)}
        />
      </ClockStyle>
      <ClockStyle>
        <Button
          btnIcon={ArrowUpIcon}
          handleClickEvent={() => handleUpClick(setMinute)}
        />
        <Text fontSize="30px">{minute}</Text>
        <Button
          btnIcon={ArrowDownIcon}
          handleClickEvent={() => handleDownClick(setMinute)}
        />
      </ClockStyle>
      <ClockStyle>
        <Button
          btnIcon={ArrowUpIcon}
          handleClickEvent={() => handleAmPmClick()}
        />
        <Text fontSize="30px">{amPm}</Text>
        <Button
          btnIcon={ArrowDownIcon}
          handleClickEvent={() => handleAmPmClick()}
        />
      </ClockStyle>
    </ClockContainerStyle>
  );
};

export { ClockContainer };
