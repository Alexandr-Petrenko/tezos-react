import { useContext, createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import getBlocks from '../../api';

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true);
    getBlocks()
      .then((response) => response)
      .then((result) => {
        setBlocks(result.data);
        setIsLoading(false);
      });
  }, []);

  const apiValue = useMemo(
    () => ({
      blocks,
      isLoading,
    }),
    [blocks, isLoading],
  );

  return <ApiContext.Provider value={apiValue}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
