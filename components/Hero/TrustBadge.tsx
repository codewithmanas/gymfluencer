
const TrustBadge = () => {
  return (
    <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <div className="flex -space-x-2 mr-2">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/avatar${i}.jpg`}
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
      <span className="text-white">Trusted by 3+ million users</span>
    </div>
  );
};

export default TrustBadge;