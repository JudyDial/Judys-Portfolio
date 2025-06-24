const FloatingOrbsBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large orb - top left */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    {/* Extra large orb - bottom right */}
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-200/25 dark:bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    {/* Medium orb - center */}
    <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-200/20 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
    {/* Small orb - top right */}
    <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-cyan-200/25 dark:bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
    {/* Small orb - bottom left */}
    <div className="absolute bottom-1/4 left-1/6 w-40 h-40 bg-pink-200/20 dark:bg-pink-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
  </div>
);

export default FloatingOrbsBackground;
