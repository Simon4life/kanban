export default function TaskCard({
  title,
  tag,
  tagColor,
}) {
  return (
    <div className="glass-card p-4 rounded-lg">
      {tag && (
        <span
          className={`px-2 py-1 rounded text-xs ${tagColor}`}
        >
          {tag}
        </span>
      )}

      <p className="mt-3">{title}</p>
    </div>
  );
}