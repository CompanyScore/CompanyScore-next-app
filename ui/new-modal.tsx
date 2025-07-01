import { useRef } from 'react';

type Modal = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NewModal({ children, visible, setVisible }: Modal) {
  const modalRef = useRef<HTMLDialogElement>(null);

  if (modalRef.current) {
    if (visible) {
      modalRef.current.showModal();
    }
  }

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <dialog
      className="modal modal-bottom sm:modal-middle"
      ref={modalRef}
      onClose={handleCancel}
    >
      <div className="modal-box w-full">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
