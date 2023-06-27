import React from 'react';
import ResponsiveTable from './cartData';
import Image1 from '../../assets/images/HeadphoneTwo.png';
import Image2 from '../../assets/images/HeadphoneTwo.png';

interface TableData {
  id: number;
  price: string;
  quantity: number;
  subtotal: string;
  imageSrc: string;
  name: string;
  color: string;
  size: number;
}

const App: React.FC = () => {
  const tableData: TableData[] = [
    {
      id: 1,
      price: '$11.70',
      quantity: 25,
      subtotal: '$11.70',
      imageSrc: Image1,
      name: 'headSet',
      color: 'Black',
      size: 30,
    },
    {
      id: 2,
      price: '$11.70',
      quantity: 25,
      subtotal: '$11.70',
      imageSrc: Image1,
      name: 'headSet',
      color: 'Black',
      size: 30,
    },
  ];

  return (
    <div>
      <ResponsiveTable data={tableData} />
    </div>
  );
};

export default App;
