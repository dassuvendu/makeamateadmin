import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSubscriptionPlans } from "../../reducers/SubscriptionsPlanSlice";

import GoldPlan from "./GoldPlan";
import DiamondPlan from "./DiamondPlan";

const Subscriptions = () => {
  const dispatch = useDispatch();

  const { goldPlan, diamondPlan } = useSelector((state) => state.plans);

  useEffect(() => {
    dispatch(fetchSubscriptionPlans());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 transition-all duration-300">
      <GoldPlan goldPlan={goldPlan} />
      <DiamondPlan diamondPlan={diamondPlan}/>
    </div>
  );
};

export default Subscriptions;
