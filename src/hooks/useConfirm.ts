/* eslint-disable no-restricted-globals */
const useConfirm = (
  message: string,
  onConfirm: () => void,
  onCancel: () => void
) => {
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (confirm(message)) {
      return onConfirm();
    } else {
      return onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;
