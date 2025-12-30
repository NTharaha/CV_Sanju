export default function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-200/50 bg-white/50 backdrop-blur-sm p-6 shadow-beautiful hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/50 hover:border-zinc-300/50 dark:hover:border-zinc-700/50">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        {desc ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {desc}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
