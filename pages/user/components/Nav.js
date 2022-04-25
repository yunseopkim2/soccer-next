import Link from "next/link";
import styles from 'common/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/user/user-list'>회원목록</Link></li>
                <li className={styles.li}> <Link href='/user/join'>회원가입</Link></li>
          <li className={styles.li}> <Link href='/user/login'>로그인</Link></li>
    <li className={styles.li}> <Link href='/user/logout'>로그아웃</Link></li>
          <li className={styles.li}> <Link href='/user/updateUser'>사용자수정</Link></li>
    <li className={styles.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link></li> 
      </ul>
    </nav>
  );
};