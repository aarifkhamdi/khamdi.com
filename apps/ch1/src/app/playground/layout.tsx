'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOnPlayground = pathname === '/playground';

  return (
    <>
      <nav>
        <ul>
          {isOnPlayground ? (
            <li>
              <Link href="/playground/thinking-in-react">
                Thinking in React
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/playground">Playground</Link>
            </li>
          )}
        </ul>
      </nav>
      {children}
    </>
  );
}
