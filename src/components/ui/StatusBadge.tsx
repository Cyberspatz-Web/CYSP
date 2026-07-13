export function StatusBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 border border-border-strong bg-ink-raised/60 px-3.5 py-1.5">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
      </span>
      <span className="label-mono">{label}</span>
    </div>
  );
}
