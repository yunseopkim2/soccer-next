import Link from "next/link";
import styles from 'common/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/todo/addTodo'>스케줄 추가</Link></li>
          <li className={styles.li}> <Link href='/todo/getTodo'>스케줄 목록</Link></li>
    <li className={styles.li}> <Link href='/todo/modifyTodo'>스케줄 수정</Link></li>
          <li className={styles.li}> <Link href='/todo/removeTodo'>스케줄 삭제</Link></li>
      </ul>
    </nav>
  );
};