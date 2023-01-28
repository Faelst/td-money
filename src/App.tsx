import Modal from 'react-modal';
import { useState } from 'react';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/context/transactions';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false);
  };

  return (
    <>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={newTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
    </>
  );
}
