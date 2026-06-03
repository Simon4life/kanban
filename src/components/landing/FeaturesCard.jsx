export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="p-8 rounded-2xl glass-card">
      <div className="mb-6">{icon}</div>

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <p>{description}</p>
    </div>
  );
}