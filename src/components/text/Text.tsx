import { ElementType, ReactNode } from 'react';
import { clsx } from 'clsx';
import { FontFamiliesClasses } from 'src/constants/articleProps';

import styles from './Text.module.scss';

type TextProps = {
  children: ReactNode;
  as?: ElementType;
  dynamic?: boolean;
  size?: 12 | 18 | 22 | 25 | 31 | 45;
  weight?: 400 | 800;
  fontStyle?: 'italic' | 'normal';
  uppercase?: boolean;
  align?: 'center' | 'left';
  family?: FontFamiliesClasses;
  dynamicLite?: boolean;
};

export const Text = ({
  children,
  as: Tag = 'div',
  size = 18,
  dynamic = false,
  weight = 400,
  fontStyle = 'normal',
  uppercase = false,
  align = 'left',
  family = 'open-sans',
  dynamicLite = false,
}: TextProps) => {
  const className = clsx(
    styles.text,
    styles[`size${size}`],  // Применяем размер шрифта
    { [styles.dynamic]: dynamic },  // Применяем динамический стиль, если нужно
    styles[`weight${weight}`],  // Применяем вес шрифта
    styles[fontStyle],  // Применяем стиль шрифта (нормальный или курсив)
    { [styles.uppercase]: uppercase },  // Применяем uppercase, если нужно
    styles[align],  // Выравнивание текста
    styles[family],  // Применяем семейство шрифтов
    { [styles.dynamicLite]: dynamicLite }  // Динамическое изменение только шрифта и цвета
  );

  return <Tag className={className}>{children}</Tag>;
};
