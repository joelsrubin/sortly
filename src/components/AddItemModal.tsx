import Modal from '@/components/ui/modal';
import AddItemForm from './AddItemForm';

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: {
    name: string;
    category: string;
    price: string;
    completedAt: string;
  }) => void;
}

const AddItemModal = ({ isOpen, onClose, onSubmit }: AddItemModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Item">
      <AddItemForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal>
  );
};

export default AddItemModal;
