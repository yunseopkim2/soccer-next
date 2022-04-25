
import Link from "next/link";
import styles from 'common/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
      <li className={styles.li}> <Link href='../getTeam'>팀목록</Link></li>
        <li className={styles.li}> <Link href='../addTeam'>팀추가</Link></li>
        <li className={styles.li}> <Link href='../modifyTeam'>팀수정</Link></li>
        <li className={styles.li}> <Link href='../removeTeam'>팀삭제</Link></li>
    
              
      </ul>
    </nav>
  );
};