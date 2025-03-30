import { useEffect } from 'react';

type UseOutsideClickClose = {
  isMenuOpen: boolean;
  onChange: (newValue: boolean) => void;
  onClose?: () => void;
  rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = ({
  isMenuOpen,
  rootRef,
  onClose,
  onChange,
}: UseOutsideClickClose) => {
  useEffect(() => {
    if (!isMenuOpen) return; // не навешиваем обработчик, если меню закрыто

    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        onClose?.();
        onChange(false);
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [isMenuOpen, onClose, onChange, rootRef]);
};
