import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friends from "./data/friendsData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import style from "/src/App.module.css";

export const App = () => {
  return (
    <>
      <h2 className={style.tasktitle}>Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className={style.tasktitle}>Task 2</h2>
      <FriendList list={friends} />
      <h2 className={style.tasktitle}>Task 3</h2>
      <TransactionHistory list={transactions} />
    </>
  );
};
