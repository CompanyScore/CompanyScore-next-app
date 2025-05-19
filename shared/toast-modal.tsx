import { Modal } from '@/ui';
import React from 'react';

type ToastModalProps = {
  message: string;
  type?: string;
};

export function ToastModal({ message, type = 'success' }: ToastModalProps) {
  return (
    <Modal id="toast-modal">
      <div className={`bg-${type} w-96 h-96`}>
        <span>{message}</span>
      </div>
    </Modal>
  );
}
