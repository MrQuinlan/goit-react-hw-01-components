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

// {
//     friends.map(el => {
//         const { avatar, name, isOnline, id } = el;

//         return (
//             <li className="s.item" id={id}>
//                 <span className="s.status">{isOnline}</span>
//                 <img
//                     className="s.avatar"
//                     src={avatar}
//                     alt="User avatar"
//                     width="48"
//                 />
//                 <p className="s.name">{name}</p>
//             </li>
//         );
//     });
// }
