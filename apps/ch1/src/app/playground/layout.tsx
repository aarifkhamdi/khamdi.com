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
  const isOnQrCodeComponent = pathname === '/playground/qr-code-component';

  if (isOnQrCodeComponent) {
    return <main>{children}</main>;
  }

  return (
    <>
      <nav>
        <ul>
          {isOnPlayground ? (
            <>
              <li>
                <Link href="/playground/thinking-in-react">
                  Thinking in React
                </Link>
              </li>
              <li>
                <Link href="/playground/qr-code-component">
                  Qr code component
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/playground">Playground</Link>
            </li>
          )}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
