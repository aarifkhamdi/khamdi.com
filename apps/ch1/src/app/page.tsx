import Link from 'next/link';
import styles from './page.module.css';

export default function Index() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/thinking-in-react">Thinking in React</Link>
        </li>
      </ul>
    </nav>
  );
}
