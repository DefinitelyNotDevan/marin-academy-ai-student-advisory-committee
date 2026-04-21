export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/8 py-8">
      <div className="w-[min(1140px,100%-2.5rem)] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-500 rounded-md grid place-items-center font-bold text-sm shrink-0">
            AI
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">AI Student Advisory Committee</div>
            <div className="text-white/50 text-xs">Marin Academy · Spring 2026</div>
          </div>
        </div>

        <p className="text-white/40 text-xs">
          © 2026 Marin Academy AI Student Advisory Committee
        </p>
      </div>
    </footer>
  );
}
