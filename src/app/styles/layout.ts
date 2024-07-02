import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px)
  {
    padding: 0 35px;
  }
  
  @media (max-width: 576px)
  {
    padding: 0 30px;
  }
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
`;