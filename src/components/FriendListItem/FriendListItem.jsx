import style from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={style.title}>{name}</p>
      <p className={clsx(style.status, isOnline && style.online)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
