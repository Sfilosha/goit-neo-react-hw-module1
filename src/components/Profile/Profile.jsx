import style from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, likes, views },
}) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardTop}>
          <img className={style.image} src={image} alt="User avatar" />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.cardBottom}>
          <li className={style.statsItem}>
            <span>Followers</span>
            <span className={style.stats}>{followers}</span>
          </li>
          <li className={style.statsItem}>
            <span>Views</span>
            <span className={style.stats}>{views}</span>
          </li>
          <li className={style.statsItem}>
            <span>Likes</span>
            <span className={style.stats}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
