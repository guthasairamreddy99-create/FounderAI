type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full"
        >
          ✕
        </button>

        {children}

      </div>

    </div>
  );
}

export default Modal;