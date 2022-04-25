import style from 'common/styles/Layout.module.css'
import Nav from "/pages/user/components/Nav";
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
    </>
  );
};