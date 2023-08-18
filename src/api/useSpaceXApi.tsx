import { useState, useEffect } from 'react';
import { ShipmentData } from '../types/types';

const useSpaceXApi = () => {
  const [data, setData] = useState<ShipmentData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json'
        );
        const jsonData: ShipmentData[] = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useSpaceXApi;
