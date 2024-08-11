import React from 'react';
import { Customer } from '../types/Customer';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${customer.id === selectedCustomerId ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CustomerList);
