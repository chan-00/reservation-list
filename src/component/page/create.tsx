import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import component
import { Header } from '../molecule/header';
// import icon src
import BackSpaceIcon from '../../icon/keyboard_backspace.svg';
import { Button } from '../atom/button';
// import styled components
import { MainStyle } from '../../styledComponent/main/publicComponent';
import { DataInputContainer } from '../organism/dataInputContainer';
import { Modal } from '../molecule/modal';
import { TimePicker } from '../organism/timePicker';

const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Create = () => {
  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate('/');
  };

  // modal display state 변수
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <MainStyle>
      <Modal display={display} setDisplay={setDisplay}>
        <TimePicker setDisplay={setDisplay} />
      </Modal>
      <Header headerText="New Reservation">
        <BackButton
          handleClickEvent={handleClickEvent}
          btnIcon={BackSpaceIcon}
        />
      </Header>
      <DataInputContainer setDisplay={setDisplay} />
    </MainStyle>
  );
};

export default Create;
