import styled from 'styled-components';

export const ShipmentDetailsWrapper = styled.section`
  grid-area: shipment-details;
  display:
  width: 100%;
  height: 40rem;
  padding: 40px;
  margin-top: 40px;
  background-color: #2d3038;
  border-radius: 50px;
  @media (max-width: 500px) {
    grid-column: span 2;
    height: clamp(25rem, 50%, 40rem);
    padding: 20px;
  &.hide {
    display: none;
  }
}
`;

export const ShipmentDetailsName = styled.h1`
  font-family: Roboto, sans-serif;
  color: #f1f1f1;
  font-size: 64px;
  font-weight: 400;
  margin: 0;
  font-family: Roboto;
  line-height: 74px;
  @media (max-width: 500px) {
    font-size: clamp(38px, 30%, 64px);
  }
`;

export const ShipmentDetailsCargoWrapper = styled.div`
  .shipment-details__cargo-bays {
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    @media (max-width: 500px) {
      font-size: clamp(20px, 50%, 34px);
    }
  }
  .shipment-details__cargo-bays-count {
    font-family: Roboto;
    font-size: 56px;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0em;
    color: #fff;
    @media (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(44px, 50%, 56px);
    }
  }
`;
