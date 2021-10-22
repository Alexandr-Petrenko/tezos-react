import { useContext, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getBlocks from '../../api';

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setBlocks([...(await getBlocks())]);
    setIsLoading(false);
  }, []);

  return (
    <ApiContext.Provider value={{ blocks, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
