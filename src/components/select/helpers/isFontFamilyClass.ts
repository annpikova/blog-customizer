import { FontFamiliesClasses, fontFamilyClasses } from 'src/constants/articleProps';

export function isFontFamilyClass(family?: string): family is FontFamiliesClasses {
  // Проверяем, является ли family значением одного из допустимых классов
  return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
