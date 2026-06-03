export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-[72px] px-5 md:px-20 max-w-7xl mx-auto">
        <div className="font-bold text-2xl">KanbanBoard</div>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-primary font-bold">
            Product
          </a>

          <a href="#">Solutions</a>
          <a href="#">FAQ</a>
          <a href="#">Login</a>
        </nav>

        <button className="bg-primary text-on-primary px-6 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </header>
  );
}