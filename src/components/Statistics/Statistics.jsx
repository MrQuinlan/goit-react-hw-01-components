import propTypes from 'prop-types';
import s from './Statistics.module.css';
import genRandomColor from '../GenRandomColor/genRandomColor';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.stat}>
                {stats.map(el => {
                    const { id, label, percentage } = el;

                    return (
                        <li
                            key={id}
                            className={s.item}
                            style={{ backgroundColor: genRandomColor() }}
                        >
                            <span className={s.label}>{label}</span>
                            <span className={s.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
