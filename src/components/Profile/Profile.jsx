import propTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ userName, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;

    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img src={avatar} alt="User avatar" className={s.avatar} />
                <p className={s.name}>{userName}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{views}</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    userName: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    }).isRequired,
};
