//import styled component
import styled from 'styled-components';
//import react hooks
import { Dispatch, SetStateAction, ReactNode } from 'react';

interface ModalType {
  display: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

interface ModalStyleType {
  display: string;
}

//바로가기 추가 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const ModalAllContainer = styled.div<ModalStyleType>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s;

    display: ${(props) => props.display};

    z-index: 5;
`;

//카메라 버튼 클릭 시 나타나는 모달 창 컨테이너 css
const ModalContainer = styled.div`
    width: 280px;
    height: 320px;

    background-color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 15px;

    border-radius: 10px;
`;

function Modal({ display, setDisplay, children }: ModalType) {
  return (
    <ModalAllContainer
      display={display ? 'block' : 'none'}
      onClick={() => setDisplay(false)}
    >
      <ModalContainer>{children}</ModalContainer>
    </ModalAllContainer>
  );
}

export { Modal };
