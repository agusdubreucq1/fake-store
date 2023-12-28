import { Outlet } from "react-router-dom"
import Header from "./Header"
import styles from '../styles/layout.module.css'
import Footer from "./Footer"

const Layout:React.FC = () => {

    return (
      <>
        <Header></Header>
        <main className={styles.main}>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </>
    )
  }

  export default Layout