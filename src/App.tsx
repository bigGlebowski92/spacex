import React from 'react';
import { MantineProvider } from '@mantine/core';

import useSpaceXApi from './api/useSpaceXApi';
import ShipmentList from './components/shipment-list/ShipmentList';
import * as S from './App.styles';

const App = () => {
  const { data: shipmentData, loading, error } = useSpaceXApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!shipmentData) {
    return <div>No data available</div>;
  }

  return (
    <MantineProvider>
      <S.AppWrapper>
        <ShipmentList shipmentData={shipmentData} />
      </S.AppWrapper>
    </MantineProvider>
  );
};

export default App;
