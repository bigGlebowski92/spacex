import styled from 'styled-components';

export const ShipmentListWrapper = styled.section`
  display: grid;
  grid-template-columns: 0.2fr 0.75fr;
  grid-template-rows: auto;
  grid-template-areas: 'logo autocomplete' 'shipment-list shipment-details';
  gap: 20px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'logo header'
      'shipment-list 0';
    &.isShipmentList {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 40px 20px;
      grid-template-areas:
        'logo header'
        'autocomplete 0'
        'shipment-details 0';
    }
  }
`;

export const SearchWrapper = styled.div`
  grid-area: autocomplete;
  max-width: 320px;
  @media (max-width: 500px) {
    grid-column: span 2;
    .isShipmentList {
      display: none;
    }
  }
  .mantine-Autocomplete-root {
    input {
      padding: 25px;
      border-radius: 10px;
      border: 1px solid;
      font-size: 20px;
      @media (max-width: 500px) {
        max-width: clamp(350px, 50%, 420px);
      }
    }
  }
`;
