import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ list }) => {
  return (
    <ul className={style.list}>
      {list.map((el) => (
        <li className={style.item} key={el.id}>
          <FriendListItem
            name={el.name}
            avatar={el.avatar}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
