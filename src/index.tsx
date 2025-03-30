import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

// Дополнительно расширяем тип для использования CSS-переменных
interface CSSPropertiesWithVariables extends CSSProperties {
	'--font-family'?: string;
	'--font-size'?: string;
	'--font-color'?: string;
	'--container-width'?: string;
	'--bg-color'?: string;
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	const style: CSSPropertiesWithVariables = {
		'--font-family': articleState.fontFamilyOption.value,
		'--font-size': articleState.fontSizeOption.value,
		'--font-color': articleState.fontColor.value,
		'--container-width': articleState.contentWidth.value,
		'--bg-color': articleState.backgroundColor.value,
	};

	return (
		<div className={clsx(styles.main)} style={style}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
