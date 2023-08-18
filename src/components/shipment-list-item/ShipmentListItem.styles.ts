import styled from 'styled-components';

export const ShipmentListItemsWrapper = styled.div`
  grid-area: shipment-list;
  max-height: 50rem;
  margin-top: 15px;
  overflow: auto;
  .link {
    text-decoration: none;
  }
  @media (max-width: 500px) {
    grid-column: span 2;
    height: clamp(25rem, 50%, 50rem);

    &.hide {
      display: none;
    }
  }
`;

export const ShipmentListTitle = styled.h3`
  font-size: 32px;
  color: #979797;
  line-height: 38px;
  text-transform: uppercase;
`;

export const ShipmentListItem = styled.p`
  &.clicked {
    color: #fff;
  }
  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #1b1d22 0%, #2d3038 100%);
    border-radius: 10px;
  }
`;
