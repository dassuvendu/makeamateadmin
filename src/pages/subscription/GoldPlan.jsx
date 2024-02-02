const GoldPlan = ({ goldPlan }) => {
  return (
    <div className="bg-red-950 p-6 rounded-lg shadow-xl transform hover:scale-110">
      <h2 className="text-2xl font-medium mb-2">Premium Plan</h2>
      <p className="text-3xl font-bold">$ {goldPlan}</p>
    </div>
  );
};

export default GoldPlan;
