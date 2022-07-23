import "./Topbar.css";
import {Search} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Fakebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search/>
          <input placeholder="Search for friends or posts" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Profile</span>
        </div>
        <img src="../../../public/assets/person/fm.jpg" alt="fm" className="topbarImg"/>
        <img src="https://simg-ssl.duolingo.com/avatars/749106171/tVzgHRf0KF/medium" alt="2"/>
      </div>
    </div>
  )
}
