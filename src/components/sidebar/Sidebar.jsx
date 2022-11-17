import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import './Sidebar.css';
import "./SidebarOption.css"
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            {/* {twitter icon} */}
            {/* <TwitterIcon className='sidebar__twitterIcon'/> */}
            {/* <SidebarOption active text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" />
            <SidebarOption text="NotificationsNone" />
            <SidebarOption text="Messages" />
            <SidebarOption text="Bookmarks" />
            <SidebarOption text="Lists" />
            <SidebarOption text="Profile" />
            <SidebarOption text="More" /> */}
            <div className='sidebarOption'>
                <TwitterIcon className='sidebar__twitterIcon'/>
            </div>
            <div className='sidebarOption' onClick={()=>{navigate("/");}}>
                <HomeIcon className='sidebar__twitterIcon' />
                <h2>Home</h2>
            </div>
            <div className='sidebarOption'>
                <SearchIcon className='sidebar__twitterIcon'/>
                <h2>Explore</h2>
            </div>
            <div className='sidebarOption'>
                <NotificationsNoneIcon className='sidebar__twitterIcon'/>
                <h2>Notifications</h2>
            </div>
            <div className='sidebarOption'>
                <MailOutlineIcon className='sidebar__twitterIcon'/>
                <h2>Messages</h2>
            </div>
            <div className='sidebarOption'>
                <BookmarkBorderIcon className='sidebar__twitterIcon'/>
                <h2>Bookmarks</h2>
            </div>
            <div className='sidebarOption'>
                <ListAltIcon className='sidebar__twitterIcon'/>
                <h2>Lists</h2>
            </div>
            <div className='sidebarOption'>
                <PermIdentityIcon className='sidebar__twitterIcon'/>
                <h2>Profile</h2>
            </div>
            <div className='sidebarOption'>
                <MoreHorizIcon className='sidebar__twitterIcon'/>
                <h2>More</h2>
            </div>
            

            <Button variant="outlined" className="sidebarTweet" fullWidth>
                Tweet</Button>
        </div >
    )
};

export default Sidebar;