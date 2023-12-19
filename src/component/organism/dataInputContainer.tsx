import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  currentReservation,
  reservationList,
} from '../../store/reservation/recoilState';
import {
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
// import component
import { GridContainer } from '../atom/gridContainer';
import { Input } from '../atom/input';
import { Button } from '../atom/button';
import { TextArea } from '../atom/textarea';
import { GuestButton } from '../molecule/guestButton';
//import icon
import EventAvailable from '../../icon/event_available.svg';
import TrashIcon from '../../icon/trash.svg';
// import function
import { formatDate } from '../../function/formatDate';
// import type
import { TableType } from '../../type/reservation/reservationListType';

interface DataInputContainerType {
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

const DataInputContainerStyle = styled.form`
  width: 100%;

  & > div {
    margin: 30px 20px;
  }

  & > div:last-child {
    margin-top: 90px;
  }
`;

const DataInput = styled(Input)`
  padding: 20px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
`;

const SelectDateButton = styled(Button)`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgb(250, 250, 250);

  & > img {
    width: 20px;
    height: 20px;
  }
`;

const SelectTable = styled.select`
  padding: 20px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  width: 705px;
  height: 70px;
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 10px;

  & > button:first-child {
    border: 1px solid rgb(240, 240, 240);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const DataInputContainer = ({ setDisplay }: DataInputContainerType) => {
  const [current, setCurrent] = useRecoilState(currentReservation);
  const [reservations, setReservations] = useRecoilState(reservationList);

  const navigate = useNavigate();

  // 입력값 state 변수
  const [name, setName] = useState<string>(
    current !== null ? current.name : ''
  );
  const [phone, setPhone] = useState<string>(
    current !== null ? current.phone : ''
  );
  const [date, setDate] = useState<string>(
    current !== null ? formatDate(current.reserveDate) : 'Select Date'
  );
  const [guest, setGuest] = useState<number>(
    current !== null ? current.guest : 1
  );
  const [table, setTable] = useState<TableType>(
    current !== null ? current.table : { table: 0, floor: 0 }
  );
  const [note, setNote] = useState<string>(
    current !== null ? current.note : ''
  );

  useEffect(() => {
    if (current !== null) {
      setDate(formatDate(current.reserveDate));
    }
  }, [current]);

  const inputChangeState = (
    setState: Dispatch<SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setState(e.target.value);
  };

  const handleClickDate = () => {
    setDisplay(true);
  };

  const handleSelectOnChange = (e) => {
    const selectOption = e.target.value.split(' ');
    setTable({
      table: Number(selectOption[0]),
      floor: Number(selectOption[1]),
    });
  };

  const handleSubmitClick = () => {
    if (date !== 'Select Date') {
      if (
        name.length !== 0 ||
        phone.length !== 0 ||
        table.table !== 0 ||
        table.floor !== 0
      ) {
        const newReservation = {
          id: current.id,
          name,
          phone,
          reserveDate: current.reserveDate,
          guest,
          table,
          note,
        };

        setReservations((currentList) => {
          const index = reservations.findIndex(
            (res) => res.id === newReservation.id
          );

          if (index !== -1) {
            return [
              ...currentList.slice(0, index),
              newReservation,
              ...currentList.slice(index + 1),
            ];
          }

          return [...currentList, newReservation];
        });
        alert('예약이 저장되었습니다.');
        setCurrent(null);
        navigate('/');
      } else {
        alert('이름, 전화번호, 테이블 값을 필수로 입력해주세요.');
      }
    } else {
      alert('날짜를 선택해주세요!');
    }
  };

  const handleDeleteClick = () => {
    setReservations((currentList) => {
      return currentList.filter((res) => res.id !== current.id);
    });
    setCurrent(null);
    navigate('/');
    alert('예약 삭제되었습니다.');
  };

  const ResultButton = () => {
    if (current !== null) {
      return (
        <ButtonContainer>
          <Button btnIcon={TrashIcon} handleClickEvent={handleDeleteClick} />
          <Button
            text="Seated"
            color="white"
            background="#ff3e00"
            handleClickEvent={handleSubmitClick}
          />
        </ButtonContainer>
      );
    } else {
      return (
        <GridContainer height="70px">
          <Button
            text="Save"
            color="white"
            background="#ff3e00"
            handleClickEvent={handleSubmitClick}
          />
        </GridContainer>
      );
    }
  };

  return (
    <DataInputContainerStyle>
      <GridContainer gap={20}>
        <DataInput
          handleChangeEvent={(e) => inputChangeState(setName, e)}
          placeholderText="Name"
          type="text"
          value={name}
          required={true}
        />
        <DataInput
          handleChangeEvent={(e) => inputChangeState(setPhone, e)}
          placeholderText="Phone"
          type="tel"
          value={phone}
          required={true}
        />
        <SelectDateButton
          btnIcon={EventAvailable}
          text={date}
          handleClickEvent={handleClickDate}
        />
      </GridContainer>
      <GridContainer gap={20}>
        <GuestButton
          guestCount={guest}
          contentsText="Guests"
          setGuestCount={setGuest}
        />
        <SelectTable
          onChange={handleSelectOnChange}
          value={`${table.table} ${table.floor}`}
        >
          <option value={'0 0'}>테이블을 선택해주세요!</option>
          <option value={'1 1'}>Table 1 · Floor 1</option>
          <option value={'1 2'}>Table 2 · Floor 1</option>
          <option value={'1 3'}>Table 3 · Floor 1</option>
          <option value={'1 4'}>Table 4 · Floor 1</option>
          <option value={'2 1'}>Table 1 · Floor 2</option>
          <option value={'2 2'}>Table 2 · Floor 2</option>
          <option value={'2 3'}>Table 3 · Floor 2</option>
          <option value={'2 4'}>Table 4 · Floor 2</option>
        </SelectTable>
      </GridContainer>
      <GridContainer height="150px">
        <TextArea placeholder="Add Note..." value={note} setValue={setNote} />
      </GridContainer>
      <ResultButton />
    </DataInputContainerStyle>
  );
};

export { DataInputContainer };
