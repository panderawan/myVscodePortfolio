import './menu.styles.scss';
import { ReactComponent as VscLogo } from '../../assets/vsclogo.svg';
import { Minimize, Restore, Close } from '../icons/icons';

const Menu = () => {
  return (
    <div className='menu-container'>
      <nav className='menu-links'>
        <VscLogo />
        <li>File</li>
        <li>Edit</li>
        <li>Selection</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </nav>
      <p className='title'>Ruddy Autem - Visual Studio Code</p>
      <div className='icons'>
        <Minimize />
        <Restore />
        <Close />
      </div>
    </div>
  );
};

export default Menu;
