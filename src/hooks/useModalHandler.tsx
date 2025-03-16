import { useState } from "react";

interface ModalOption {
  icon: string;
  label: string;
  actionClicked: number;
}

export function useModalHandler() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalOptions, setModalOptions] = useState<ModalOption[]>([]);
  const [onSelectCallback, setOnSelectCallback] = useState<
    (selected: number) => void
  >(() => {});

  const openModal = (
    title: string,
    options: ModalOption[],
    onSelect: (selected: number) => void
  ) => {
    setModalTitle(title);
    setModalOptions(options);
    setOnSelectCallback(() => onSelect);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return {
    modalVisible,
    modalTitle,
    modalOptions,
    openModal,
    closeModal,
    onSelectCallback,
  };
}
