function DiamondPlan({ diamondPlan }) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md transform hover:scale-110">
      <h2 className="text-2xl font-medium mb-2">Diamond Plan</h2>
      <p className="text-3xl font-bold">$ {diamondPlan}</p>
    </div>
  );
}

export default DiamondPlan;
