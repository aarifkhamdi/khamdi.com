import styles from './page.module.css';

export default function Index() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/thinking-in-react">Thinking in React</a>
        </li>
      </ul>
    </nav>
  );
}
