export default function BackgroundGlows({ scrollY }) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
    </div>
  );
}
