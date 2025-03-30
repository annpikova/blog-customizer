import { FC, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import styles from './styles/index.module.scss';

interface CSSPropertiesWithVariables extends CSSProperties {
  '--font-family'?: string;
  '--font-size'?: string;
  '--font-color'?: string;
  '--container-width'?: string;
  '--bg-color'?: string;
}

export const App: FC = () => {
  const [articleState, setArticleState] = useState(defaultArticleState);

  const style: CSSPropertiesWithVariables = {
    '--font-family': articleState.fontFamilyOption.value,
    '--font-size': articleState.fontSizeOption.value,
    '--font-color': articleState.fontColor.value,
    '--container-width': articleState.contentWidth.value,
    '--bg-color': articleState.backgroundColor.value,
  };

  return (
    <div className={styles.main} style={style}>
      <ArticleParamsForm
        articleState={articleState}
        setArticleState={setArticleState}
      />
      <Article />
    </div>
  );
};
