import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  currentReservation,
  currentId,
} from '../../store/reservation/recoilState';
//import component
import { Input } from '../atom/input';
import { Icon } from '../atom/icon';
import { Button } from '../atom/button';
import { ClockContainer } from '../molecule/clockContainer';
// import function
import { formatDay, formatTime } from '../../function/formatDate';
//import icon
import AlarmIcon from '../../icon/alarm_on.svg';
import TodayIcon from '../../icon/today.svg';
import TrashIcon from '../../icon/trash.svg';

interface TimePickerType {
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

// 스타일드 컴포넌트 정의
const TimePickerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;

  & > button:first-child {
    padding: 5px 10px;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
  }

  & > button:last-child {
    width: 75%;
  }
`;

const TimeInput = styled(Input)`
  padding: 15px 20px;
  margin-left: 10px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  font-size: 15px;
`;

const TimePicker = ({ setDisplay }: TimePickerType) => {
  const [current, setCurrent] = useRecoilState(currentReservation);
  const [objId, setObjId] = useRecoilState(currentId);
  const [time, setTime] = useState<Date>(
    current !== null ? current.reserveDate : new Date()
  );

  // 저장 버튼 클릭 이벤트 핸들러
  const handleSave = () => {
    if (current === null) {
      setCurrent({
        id: objId + 1,
        name: '',
        phone: '',
        reserveDate: time,
        guest: 0, // 기본값 설정
        table: { table: 0, floor: 0 },
        note: '',
      });
      setObjId((prev) => prev + 1);
    } else {
      setCurrent({
        ...current,
        reserveDate: time,
      });
    }
    setDisplay((prev) => !prev);
  };
  const handleTrashClick = () => {
    setDisplay((prev) => !prev);
  };

  const handleTimePickerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <TimePickerContainer onClick={handleTimePickerClick}>
      <DateContainer>
        <Icon src={AlarmIcon} width="25px" height="25px" />
        <TimeInput type="text" value={formatTime(time)} readonly={true} />
      </DateContainer>
      <DateContainer>
        <Icon src={TodayIcon} width="25px" height="25px" />
        <TimeInput type="text" value={formatDay(time)} readonly={true} />
      </DateContainer>
      <ClockContainer time={time} setTime={setTime} />
      <ButtonContainer>
        <Button handleClickEvent={handleTrashClick} btnIcon={TrashIcon} />
        <Button
          handleClickEvent={handleSave}
          text="Save"
          background="red"
          color="white"
        />
      </ButtonContainer>
    </TimePickerContainer>
  );
};

export { TimePicker };
