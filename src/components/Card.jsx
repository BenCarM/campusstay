export default function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-blue-900/10 ${className}`}>
      {title ? <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2> : null}
      {children}
    </div>
  );
}
