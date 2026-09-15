import { Link } from "@tanstack/react-router";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 text-[12px] text-ink-soft ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="transition-colors hover:text-maroon">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <span className="text-hairline">/</span>
              {item.href && !isLast ? (
                <Link to={item.href} className="transition-colors hover:text-maroon">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
