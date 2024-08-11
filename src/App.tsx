import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/Customer';
import './index.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchedCustomers: Customer[] = [
      { id: 1, name: 'Customer 01', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic' },
      { id: 2, name: 'Customer 02', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic' },
      { id: 3, name: 'Customer 03', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic' },
      { id: 4, name: 'Customer 04', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic' },
    ];
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
