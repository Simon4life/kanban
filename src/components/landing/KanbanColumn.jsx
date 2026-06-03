import TaskCard from "./TaskCard";

export default function KanbanColumn({
  title,
  count,
  tasks,
}) {
  return (
    <div className="w-[320px]">
      <div className="flex justify-between mb-4">
        <span>{title}</span>
        <span>{count}</span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}