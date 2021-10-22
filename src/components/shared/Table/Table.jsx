import { useEffect, useState } from 'react';
import { useApi } from '../../Providers/ApiProvider.jsx';
import styles from './_Table.module.scss';

const { scrollTableBody, scrollTable } = styles;

const Table = () => {
  const columnsNames = [
    { id: 0, name: 'Block ID', value: 'level' },
    { id: 1, name: 'Baker', value: 'bakerName' },
    { id: 2, name: ' Created', value: 'timestamp' },
    { id: 3, name: '# of operations', value: 'number_of_operations' },
    { id: 4, name: 'Volume', value: 'volume' },
    { id: 5, name: 'Fees', value: 'fees' },
    { id: 6, name: 'Endorsements', value: 'level' },
  ];
  const { blocks, isLoading } = useApi();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(blocks);
  }, [blocks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={scrollTable}>
      <table>
        <thead>
          <tr>
            {columnsNames.map((column) => {
              const { id, name } = column;
              return <th key={id}>{name}</th>;
            })}
          </tr>
        </thead>
      </table>
      <div className={scrollTableBody}>
        <table>
          <tbody>
            {tableData.map((block) => {
              const {
                level,
                bakerName,
                timestamp,
                // eslint-disable-next-line camelcase
                number_of_operations,
                volume,
                fees,
                endorsements,
              } = block;

              return (
                <tr key={level}>
                  <td>{level}</td>
                  <td>{bakerName || '-----'}</td>
                  <td>{timestamp}</td>
                  {/* eslint-disable-next-line camelcase */}
                  <td>{number_of_operations}</td>
                  <td>{volume / 1000000}</td>
                  <td>{fees / 1000000}</td>
                  <td>{endorsements / 1000000}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
