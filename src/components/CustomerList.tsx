import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Customer } from '../types/Customer';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const ROW_HEIGHT = 150; // Adjust based on your row height
const WIDTH = 300; // Adjust based on the width of your customer card

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const customer = customers[index];
    return (
      <div
        style={style}
        key={customer.id}
        className={`customer-card ${customer.id === selectedCustomerId ? 'selected' : ''}`}
        onClick={() => onSelectCustomer(customer.id)}
      >
        <h3>{customer.name}</h3>
        <p>{customer.title}</p>
      </div>
    );
  };

  return (
    <List
      height={1000} // Adjust based on the height of your container
      itemCount={customers.length}
      itemSize={ROW_HEIGHT}
      width={WIDTH}
    >
      {Row}
    </List>
  );
};

export default React.memo(CustomerList);
