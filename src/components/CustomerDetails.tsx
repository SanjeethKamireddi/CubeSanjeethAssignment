import React from 'react';
import { Customer } from '../types/Customer';
import ImageGrid from './ImageGrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) return <div>Select a customer to view details</div>;

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <h4>{customer.title}</h4>
      <ImageGrid imageCount={9} interval={10000} />
    </div>
  );
};

export default CustomerDetails;
