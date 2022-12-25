import styled from "styled-components";

export const CardWrapStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 30px;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 auto 30px;
`;
export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 auto;
  max-width: 350px;
  position: relative;
  & .sold-out {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 5px 10px;
    background-color: #fff;
    font-weight: 400;
    font-size: 10px;
    line-height: 110%;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    max-width: 320px;
  }
`;
export const CardImage = styled.div`
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const CardRating = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 110%;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  & > svg {
    width: 15px;
    height: 15px;
    line-height: 110%;
  }
  & > p {
    color: #222222;
  }
  & > .where,
  & > .count {
    color: #918e9b;
  }
`;
export const CardText = styled(CardRating)`
  margin: 10px 0;
  & + & {
    margin-top: 10px;
    color: #2e2e2e;
  }
`;
export const CardPrice = styled(CardRating)`
  & > strong {
    font-weight: 600;
  }
`;
