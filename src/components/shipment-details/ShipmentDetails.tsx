import { ShipmentData } from '@/types/types';
import React, { useEffect, useState } from 'react';
import * as S from './ShipmentDetails.styles';

interface ShipmentDetailsProps {
  selectedShipment: ShipmentData;
  isShipmentList: boolean;
}

const ShipmentDetails = ({
  selectedShipment,
  isShipmentList,
}: ShipmentDetailsProps) => {
  const { boxes: shipmentBoxes, name, email } = selectedShipment;
  const [boxes, setBoxes] = useState(shipmentBoxes);

  console.log(isShipmentList);
  useEffect(() => {
    setBoxes(shipmentBoxes);
  }, [shipmentBoxes]);

  function calculateCargoBays(boxes: string) {
    if (boxes === null) return 0;
    const units = boxes
      .split(',')
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item));

    const totalUnits = units.reduce((sum, unit) => sum + unit, 0);
    const cargoBays = Math.ceil(totalUnits / 10);
    return cargoBays;
  }

  function handleBoxUnitsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newBoxes = e.target.value;
    setBoxes(newBoxes);
  }

  return (
    <S.ShipmentDetailsWrapper
      className={`shipment-details ${!isShipmentList && 'hide'}`}
    >
      <S.ShipmentDetailsName className="shipment-details__name">
        {name}
      </S.ShipmentDetailsName>
      <p className="shipment-details__email">{email}</p>
      <S.ShipmentDetailsCargoWrapper className="shipment-details__cargo">
        <p className="shipment-details__cargo-label">CARGO BOXES</p>
        <input
          className="shipment-details__cargo-input"
          type="text"
          value={boxes || ''}
          onChange={handleBoxUnitsChange}
        />
        <p className="shipment-details__cargo-bays">
          Number of required cargo bays:
          <br />
          <span className="shipment-details__cargo-bays-count">
            {calculateCargoBays(boxes)}
          </span>
        </p>
      </S.ShipmentDetailsCargoWrapper>
    </S.ShipmentDetailsWrapper>
  );
};

export default ShipmentDetails;
