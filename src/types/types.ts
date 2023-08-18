export interface ShipmentData {
  id: string;
  name: string;
  email: string;
  boxes: string;
}

export interface ShipmentListProps {
  shipmentData: ShipmentData[];
}
