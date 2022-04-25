import style from 'common/styles/Layout.module.css'
import Nav from "./teamNav";
import Footer from "common/Footer"
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
      <Footer/>
    </>
  );
};