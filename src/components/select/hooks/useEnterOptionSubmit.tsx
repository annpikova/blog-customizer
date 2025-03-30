import { useEffect } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void;
	value: OptionType['value'];
	optionRef: React.RefObject<HTMLLIElement>;
};

export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: UseEnterOptionSubmit) => {
	useEffect(() => {
		const option = optionRef.current;
		if (!option) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			// Проверяем, что элемент в фокусе
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(value); // Вызываем onClick с переданным значением
			}
		};

		// Добавляем обработчик события
		option.addEventListener('keydown', handleEnterKeyDown);

		// Очистка события при размонтировании компонента
		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [value, onClick, optionRef]); // зависимость от value, onClick, optionRef
};
