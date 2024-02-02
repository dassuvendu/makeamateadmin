import { configureStore } from '@reduxjs/toolkit';

import AuthSlice from '../reducers/AuthSlice';
import DashboardSlice from '../reducers/DashboardSlice';
import SubscriptionsPlanSlice from '../reducers/SubscriptionsPlanSlice';
import UsersListSlice from '../reducers/UsersListSlice';
import OrdersListSlice from '../reducers/OrdersListSlice';
import CharactersSlice from '../reducers/CharactersSlice';

export const store = configureStore({
  reducer: {
    loginAuth: AuthSlice,
    subscriber: DashboardSlice,
    plans: SubscriptionsPlanSlice,
    usersList: UsersListSlice,
    ordersList: OrdersListSlice,
    characters: CharactersSlice,
  },
  devTools: import.meta.env.DEV,
});
