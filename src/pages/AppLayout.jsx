import styles from './AppLayout.module.css'
import SideBar from "../components/SideBar";
import User from '../components/User';
import Map from '../components/Map';

export default function AppLayout() {
  return (
    <div  className={styles.app}>
      <SideBar/>
      <Map />
      <User />
    </div>
  );
}
