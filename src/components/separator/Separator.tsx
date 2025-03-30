import React from 'react';
import styles from './Separator.module.scss';

type SeparatorProps = {
	color?: string; // цвет разделителя
	margin?: string; // отступы сверху и снизу
};

export const Separator = ({
	color = '#000',
	margin = '16px 0',
}: SeparatorProps) => {
	const customStyles = {
		backgroundColor: color, // поддержка кастомного цвета
		margin: margin, // поддержка кастомных отступов
	};

	return <div className={styles.separator} style={customStyles}></div>;
};
