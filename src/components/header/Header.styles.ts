import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-area: header;
  display: none;
  @media (max-width: 500px) {
    display: flex;
    align-self: center;
    justify-self: end;
  }
`;
