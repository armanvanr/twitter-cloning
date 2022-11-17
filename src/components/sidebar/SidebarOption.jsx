import "./SidebarOption.css"
import HomeIcon from '@mui/icons-material/Home';

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            {/* <Icon/> */}
            Icon
            <h2>{text}</h2>
        </div>
    )
};

export default SidebarOption;