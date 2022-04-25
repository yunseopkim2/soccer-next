
import Link from "next/link";
import styles from 'common/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
      <li className={styles.li}> <Link href='../getGame'>게임목록</Link></li>
        <li className={styles.li}> <Link href='../addGame'>게임추가</Link></li>
        <li className={styles.li}> <Link href='../modifyGame'>게임수정</Link></li>
        <li className={styles.li}> <Link href='../removeGame'>게임삭제</Link></li>
    
              
      </ul>
    </nav>
  );
};