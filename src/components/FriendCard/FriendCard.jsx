import propTypes from 'prop-types';
import s from './FriendCard.module.css';

export default function FriendCard({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
            {isOnline ? (
                <span className={s.status} style={{ backgroundColor: 'green' }}>
                    {isOnline}
                </span>
            ) : (
                <span className={s.status} style={{ backgroundColor: 'red' }}>
                    {isOnline}
                </span>
            )}

            <img
                className={s.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
                style={{ backgroundColor: 'rgba(34, 60, 80, 0.2)' }}
            />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendCard.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};
