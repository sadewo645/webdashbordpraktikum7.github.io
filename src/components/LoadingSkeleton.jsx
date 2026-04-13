const LoadingSkeleton = () => (
  <div className="space-y-4">
    <div className="glass h-28 animate-pulseSoft" />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="glass h-24 animate-pulseSoft" />
      ))}
    </div>
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <div className="glass h-72 xl:col-span-2 animate-pulseSoft" />
      <div className="glass h-72 animate-pulseSoft" />
    </div>
    <div className="glass h-80 animate-pulseSoft" />
  </div>
);

export default LoadingSkeleton;
