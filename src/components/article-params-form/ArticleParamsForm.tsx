import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';
import { useState, useRef } from 'react';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { fontFamilyOptions, ArticleStateType, fontSizeOptions, fontColors, backgroundColors, contentWidthArr, defaultArticleState } from 'src/constants/articleProps';


interface IArticleParamsFormProps {
	articleState: ArticleStateType;
	setArticleState: (state: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  	const onClickIsMenuOpen = () => {
        setIsMenuOpen(isMenuOpen === false ? true : false);
    }

	const [formState, setFormState] = useState({
		fontFamilyOption: props.articleState.fontFamilyOption,
		fontColor: props.articleState.fontColor,
		backgroundColor: props.articleState.backgroundColor,
		contentWidth: props.articleState.contentWidth,
		fontSizeOption: props.articleState.fontSizeOption,
	});

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
		event.preventDefault();
		props.setArticleState({
			fontFamilyOption: formState.fontFamilyOption,
			fontColor: formState.fontColor,
			backgroundColor: formState.backgroundColor,
			contentWidth: formState.contentWidth,
			fontSizeOption:formState.fontSizeOption,
		})
		setIsMenuOpen(false)
	}

	const resetFormSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
		event.preventDefault();
		setFormState(defaultArticleState)
		props.setArticleState(defaultArticleState);
	}

	useOutsideClickClose({
		isMenuOpen,
		rootRef,
		onClose: () => setIsMenuOpen(false),
		onChange: setIsMenuOpen,
	});

	return (
		<>
			<ArrowButton onClick={onClickIsMenuOpen} isMenuOpen={isMenuOpen}/>
			<aside className={`${styles.container} ${isMenuOpen ? styles.container_open : ""}`} ref={rootRef}>
				<form className={styles.form} onSubmit={handleFormSubmit} onReset={resetFormSubmit}>
					<Text as={'h2'} uppercase={true} weight={800} size={31}>Задайте параметры</Text>
					<Select selected={formState.fontFamilyOption} options={fontFamilyOptions} onChange={(selected) => { setFormState((prevState) => ({ ...prevState, fontFamilyOption: selected})) }} title="Шрифт"></Select>
					<RadioGroup selected={formState.fontSizeOption} options={fontSizeOptions} onChange={(selected) => { setFormState((prevState) => ({ ...prevState, fontSizeOption: selected})) }} title='Размер шрифта' name="Размер шрифта"></RadioGroup>
					<Select selected={formState.fontColor} options={fontColors} onChange={(selected) => { setFormState((prevState) => ({ ...prevState, fontColor: selected})) }} title="Цвет шрифта"></Select>
					<Separator/>
					<Select selected={formState.backgroundColor} options={backgroundColors} onChange={(selected) => { setFormState((prevState) => ({ ...prevState, backgroundColor: selected})) }} title="Цвет фона"></Select>
					<Select selected={formState.contentWidth} options={contentWidthArr} onChange={(selected) => { setFormState((prevState) => ({ ...prevState, contentWidth: selected})) }} title="Ширина контента"></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
}
