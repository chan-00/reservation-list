import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  currentReservation,
  reservationList,
} from '../../store/reservation/recoilState';
import { useNavigate } from 'react-router-dom';
// import component
import { ReserveCard } from '../molecule/reserveCard';
// import styled
import { BodyStyle } from '../../styledComponent/main/publicComponent';

interface CardContainerType {
  className?: string;
}

const CardContainerStyle = styled(BodyStyle)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > div {
    margin: 10px;
  }
`;

const CardContainer = ({ className }: CardContainerType) => {
  const navigation = useNavigate();

  const reserveList = useRecoilValue(reservationList);
  const setCurrentReservation = useSetRecoilState(currentReservation);

  const handleCardClick = (cardData) => {
    setCurrentReservation(cardData);
    navigation('/edit');
  };

  return (
    <CardContainerStyle className={className}>
      {reserveList.map((data) => (
        <ReserveCard
          cardData={data}
          key={data.id}
          handleOnClick={() => handleCardClick(data)}
        />
      ))}
    </CardContainerStyle>
  );
};

export { CardContainer };
