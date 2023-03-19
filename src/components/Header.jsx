import FitbitIcon from '@mui/icons-material/Fitbit';
import SettingsIcon from '@mui/icons-material/Settings';
import './Header.css'
import User from './User';

function Header(props) {

    const { userName, setUserName } = props;

    return <header id='main-panel'>
        <div id='branding' style={{display: 'flex'}}>
            <FitbitIcon id='logo' fontSize='large'/>
            <h1>Red Technologies</h1>
        </div>
        <div id='account-settings'>
            
            <User userName={userName} setUserName={setUserName}/>
            <SettingsIcon fontSize='large'/>
        </div>
    </header>
}

export default Header;