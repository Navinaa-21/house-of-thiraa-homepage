export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2 text-gold">
      <span className="h-px w-16 bg-hairline" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
      </svg>
      <span className="h-px w-16 bg-hairline" />
    </div>
  );
}
