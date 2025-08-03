import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (from: string, to: string) => void;
  initialFrom?: string;
  initialTo?: string;
}

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  initialFrom = "",
  initialTo = "",
}: RegisterModalProps) => {
  const [fromInput, setFromInput] = useState(initialFrom);
  const [toInput, setToInput] = useState(initialTo);

  useEffect(() => {
    if (isOpen) {
      setFromInput(initialFrom);
      setToInput(initialTo);
    }
  }, [isOpen, initialFrom, initialTo]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!fromInput.trim() || !toInput.trim()) return;
    onRegister(fromInput.trim(), toInput.trim());

    setFromInput("");
    setToInput("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60">
      <div className="bg-white rounded-lg p-8 w-[28rem] max-w-full shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">NEW DICTIONARY</h2>
          <button
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
            aria-label="Close Register Modal"
          >
            <CgClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="From"
            className="border border-gray-300 rounded px-3 py-2"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            className="border border-gray-300 rounded px-3 py-2"
            value={toInput}
            onChange={(e) => setToInput(e.target.value)}
          />
          <button
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
            onClick={handleSubmit}
            disabled={!fromInput.trim() || !toInput.trim()}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
