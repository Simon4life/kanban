import KanbanColumn from "./KanbanColumn";

const todo = [
  {
    id: 1,
    title: "Refactor navigation system",
    tag: "Design",
    tagColor: "text-orange-400",
  },
];

const doing = [
  {
    id: 2,
    title: "Fix persistent latency",
    tag: "High Priority",
    tagColor: "text-purple-400",
  },
];

const done = [
  {
    id: 3,
    title: "Setup CI/CD pipeline",
  },
];

export default function KanbanPreview() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-20 pb-32">
      <div className="glass-card rounded-xl p-8 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          <KanbanColumn
            title="To Do"
            count={todo.length}
            tasks={todo}
          />

          <KanbanColumn
            title="Doing"
            count={doing.length}
            tasks={doing}
          />

          <KanbanColumn
            title="Done"
            count={done.length}
            tasks={done}
          />
        </div>
      </div>
    </section>
  );
}