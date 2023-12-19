import styled from 'styled-components';

const MainStyle = styled.div`
  width: 750px;
  height: 600px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0 auto;

  position: relative;
`;

const BodyStyle = styled.div`
  width: 100%;
  height: 540px;
  background-color: rgb(245, 245, 244);
  border-radius: 0 0 10px 10px;
`;

const CreateBodyStyle = styled(BodyStyle)`
  background-color: white;
`;

export { MainStyle, BodyStyle, CreateBodyStyle };
