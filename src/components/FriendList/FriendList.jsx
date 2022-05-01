import propTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendCard from '../FriendCard/FriendCard';

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(el => {
                const { avatar, name, isOnline, id } = el;

                return (
                    <FriendCard
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        id={id}
                    />
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
};
