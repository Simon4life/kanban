import FeatureCard from "./FeaturesCard"

export default function Features() {
  const features = [
    {
      title: "Automated Workflows",
      description:
        "Automate status updates and task handoffs.",
    },
    {
      title: "Team Collaboration",
      description:
        "Real-time comments and mentions.",
    },
    {
      title: "Real-time Analytics",
      description:
        "Identify bottlenecks instantly.",
    },
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-5 md:px-20">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}