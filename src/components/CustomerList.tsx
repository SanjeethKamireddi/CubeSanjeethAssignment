import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Customer } from '../types/Customer';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const ROW_HEIGHT = 150;
const WIDTH = 300;

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
      height={1000}
      itemCount={customers.length}
      itemSize={ROW_HEIGHT}
      width={WIDTH}
    >
      {Row}
    </List>
  );
};

export default React.memo(CustomerList);
