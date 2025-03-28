import { useEffect } from 'react';

type UseEnterSubmit = {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  placeholderRef: React.RefObject<HTMLDivElement>;
};

export const useEnterSubmit = ({
  placeholderRef,
  onChange,
}: UseEnterSubmit) => {
  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      // Обработка нажатия клавиши Enter
      if (event.key === 'Enter') {
        onChange((prevState) => !prevState); // Переключаем состояние
      }
    };

    placeholderEl.addEventListener('keydown', handleEnterKeyDown);

    // Очистка события при размонтировании компонента
    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [placeholderRef, onChange]); // Включаем зависимости для onChange и placeholderRef
};
