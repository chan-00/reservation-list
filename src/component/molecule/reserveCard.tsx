import styled from 'styled-components';
import { MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  reservationList,
  seatReservationList,
} from '../../store/reservation/recoilState';
//import component
import { Button } from '../atom/button';
import { Text } from '../atom/text';
import { Icon } from '../atom/icon';
// import svg
import PhoneIcon from '../../icon/phone.svg';
import EventAvailbableIcon from '../../icon/event_available.svg';
import GroupIcon from '../../icon/group.svg';
import EditIcon from '../../icon/edit.svg';
import TrashIcon from '../../icon/trash.svg';
// import type
import {
  ReservationListType,
  TableType,
} from '../../type/reservation/reservationListType';
// import function
import { formatDate } from '../../function/formatDate';

interface ReserveCardType {
  className?: string;
  cardData: ReservationListType;
  handleOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const ReserveCardStyle = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 5px 0;
  height: 250px;
  cursor: pointer;

  span {
    font-weight: 540;
    font-size: 14px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const CallButtonStyle = styled(Button)`
  font-size: 12px;
  color: gray;
  border: 1px solid rgb(240, 240, 240); 
  border-radius: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px 10px;
  margin-left: 10px;

  display: inline-flex;
  aligh-items: center;

  > img {
    margin-right: 5px;
    width: 12px;
    height: 12px;
  }
`;

const CardContentsContainerStyle = styled.div`
  margin: 10px 15px;
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

const ButtonContainerStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 15px;

  > button {
    border: 1px solid rgb(240, 240, 240);
    width: 40px;
    height: 40px;
    margin: 5px 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  > button:last-child {
    width: 140px;
    border-radius: 10px;
  }
`;

const FormatTable = (tableData: TableType) => {
  return (
    <>
      Reserved Table <b>{tableData.table}</b> · Floor {tableData.floor}
    </>
  );
};

const ReserveCard = ({
  className,
  cardData,
  handleOnClick,
}: ReserveCardType) => {
  const setReservations = useSetRecoilState(reservationList);
  const setSeatReservations = useSetRecoilState(seatReservationList);

  const handleSeatedClick = () => {
    setSeatReservations((currentList) => {
      return [...currentList, cardData];
    });
    setReservations((currentList) => {
      return currentList.filter((res) => res.id !== cardData.id);
    });
    alert('착석 처리되었습니다.');
  };

  const handleDeleteClick = () => {
    setReservations((currentList) => {
      return currentList.filter((res) => res.id !== cardData.id);
    });
    alert('예약 삭제되었습니다.');
  };

  return (
    <ReserveCardStyle className={className} onClick={handleOnClick}>
      <CardContentsContainerStyle>
        <Text>
          <b>{cardData.name}</b>
        </Text>
        <CallButtonStyle btnIcon={PhoneIcon} text={cardData.phone} />
      </CardContentsContainerStyle>
      <CardContentsContainerStyle>
        <Icon src={EventAvailbableIcon} />
        <Text>{formatDate(cardData.reserveDate)}</Text>
      </CardContentsContainerStyle>
      <CardContentsContainerStyle>
        <Icon src={GroupIcon} />
        <Text>{cardData.guest.toString()}</Text>
      </CardContentsContainerStyle>
      <CardContentsContainerStyle>
        <Text>
          <FormatTable {...cardData.table} />
        </Text>
      </CardContentsContainerStyle>
      <CardContentsContainerStyle>
        <Text>{cardData.note}</Text>
        <Icon src={EditIcon} />
      </CardContentsContainerStyle>
      <ButtonContainerStyle>
        <Button btnIcon={TrashIcon} handleClickEvent={handleDeleteClick} />
        <Button
          text="Seated"
          color="white"
          background="#ff3e00"
          handleClickEvent={handleSeatedClick}
        />
      </ButtonContainerStyle>
    </ReserveCardStyle>
  );
};

export { ReserveCard };
