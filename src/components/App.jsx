import Profile  from "Profile/Profile";
import ProfileJson from '../Profile/user.json'

import Statistics  from "Statistics/Statistics";
import statisticsjson from '../Statistics/data.json'

import FriendListItem  from "FriendList/FriendList";
import friendListItemJson from '../FriendList/friends.json';

import TransactionHistory from "TransactionHistory/Th";
import transactionsJson from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
<>    
<Profile items={ProfileJson}/>
<Statistics items={statisticsjson}/>
<FriendListItem items={friendListItemJson}/>
<TransactionHistory items={transactionsJson}/>
</>
  );
};


