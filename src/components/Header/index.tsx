import Image from 'next/image';
import styles from './styles.module.scss';

console.log(styles);

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="" width={100} height={100} />
        <nav>
          <a className={styles.active} href="https://google.com">
            Home
          </a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
