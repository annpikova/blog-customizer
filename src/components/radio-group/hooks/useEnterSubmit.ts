import { useEffect, useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterSubmitProps = {
  onChange?: (option: OptionType) => void;
  option: OptionType;
};

export const useEnterSubmit = ({ onChange, option }: UseEnterSubmitProps) => {
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const optionHtml = optionRef.current;

    if (!optionHtml) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && document.activeElement === optionHtml) {
        onChange?.(option); // Вызываем onChange при нажатии Enter
      }
    };

    // Добавляем обработчик событий
    optionHtml.addEventListener('keydown', handleEnterKeyDown);

    // Очистка при размонтировании компонента
    return () => {
      optionHtml?.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [onChange, option]);

  return optionRef;
};
