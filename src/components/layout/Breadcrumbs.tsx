"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // removes empty parts

  // If you’re on home ("/"), don't show anything
  if (segments.length === 0) return null;

  return (
    <nav className="text-sm text-gray-600 px-6 py-3">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline text-blue-600">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              <Link href={href} className="hover:underline text-blue-600">
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
