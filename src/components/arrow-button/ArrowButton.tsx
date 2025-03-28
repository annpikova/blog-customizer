import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

// Тип для функции обработки клика
export type OnClick = () => void;

interface ArrowButtonProps {
  onClick: OnClick;
  isMenuOpen: boolean;
}

export const ArrowButton = ({ onClick, isMenuOpen }: ArrowButtonProps) => {
  return (
    <div
      role="button"
      aria-label="Открыть/Закрыть панель параметров"
      tabIndex={0}
      className={`${styles.container} ${isMenuOpen ? styles.container_open : ''}`}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt="Иконка стрелочки"
        className={`${styles.arrow} ${isMenuOpen ? styles.arrow_open : ''}`}
      />
    </div>
  );
};
