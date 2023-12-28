import { Outlet } from "react-router-dom"
import Header from "./Header"
import styles from '../styles/layout.module.css'

const Layout:React.FC = () => {

    return (
      <>
        <Header></Header>
        <main className={styles.main}>
          <Outlet></Outlet>
        </main>
      </>
    )
  }

  export default Layout