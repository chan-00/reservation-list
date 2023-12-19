import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import component
import { Header } from '../molecule/header';
import { CardContainer } from '../organism/cardContainer';
// import icon src
import AddIcon from '../../icon/add.svg';
import { Button } from '../atom/button';
// import styled components
import { MainStyle } from '../../styledComponent/main/publicComponent';

const ReserveButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Main = () => {
  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate('/create');
  };

  return (
    <MainStyle>
      <Header headerText="Reservation">
        <ReserveButton
          text="New Reservation"
          handleClickEvent={handleClickEvent}
          btnIcon={AddIcon}
        />
      </Header>
      <CardContainer />
    </MainStyle>
  );
};

export default Main;
