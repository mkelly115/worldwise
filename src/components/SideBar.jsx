import AppNav from './AppNav'
import styles from './Sidebar.module.css'
import Logo from './Logo'

export default function SideBar(){
    return(
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <p>List of Cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by Mr. WorldWide Inc.
                </p>
            </footer>
        </div>
    )
}