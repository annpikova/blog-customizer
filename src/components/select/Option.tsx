import { useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterOptionSubmit } from './hooks/useEnterOptionSubmit';

import styles from './Select.module.scss';

type OptionProps = {
	option: OptionType;
	selected: OptionType | null;
	onClick: (value: OptionType['value']) => void;
};

export const Option = (props: OptionProps) => {
	const {
		option: { value, title, optionClassName, className },
		selected,
		onClick,
	} = props;

	const optionRef = useRef<HTMLLIElement>(null);
	const fontFamilyClass = isFontFamilyClass(className) ? className : undefined;
	const isSelected = selected?.value === value;

	const handleClick =
		(clickedValue: OptionType['value']): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue);
		};

	useEnterOptionSubmit({
		optionRef,
		value,
		onClick,
	});

	return (
		<li
			className={clsx(styles.option, styles[optionClassName || ''])}
			value={value}
			onClick={handleClick(value)}
			tabIndex={0}
			data-selected={isSelected}
			data-testid={`select-option-${value}`}
			ref={optionRef}>
			<Text family={fontFamilyClass}>{title}</Text>
		</li>
	);
};
