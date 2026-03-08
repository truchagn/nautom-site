export default function GridOverlay() {
  return (
    <div
      id="grid-overlay"
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-2 md:grid-cols-4">
        <div className="border-l border-dashed border-white/[0.08]" />
        <div className="border-l border-dashed border-white/[0.08]" />
        <div className="hidden md:block border-l border-dashed border-white/[0.08]" />
        <div className="hidden md:block border-l border-dashed border-white/[0.08] border-r" />
      </div>
    </div>
  );
}
