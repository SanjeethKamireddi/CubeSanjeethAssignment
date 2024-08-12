import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/Customer';
import './index.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchedCustomers: Customer[] = Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Customer ${index + 1}`,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    }));
    setCustomers(fetchedCustomers);
  }, []);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId) || null;

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        onSelectCustomer={setSelectedCustomerId}
        selectedCustomerId={selectedCustomerId}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
