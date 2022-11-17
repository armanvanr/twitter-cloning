import "./Post.css"
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';


const Post = () => {
    const tweets = useSelector((state) => state.stories.tweets);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(tweets);
    return (
        <div>
            {tweets.filter((t) => t.parentId === null).map((tweet) => {
                return (
                    <div className="post" key={tweet.id} >
                        <div className="post__avatar">
                            <Avatar src={tweet.avatar} />
                        </div>
                        <div className="post__body">
                            <div className="post__header">
                                <div className="post_headerText">
                                    <h3>
                                        {tweet.displayName}{' '}
                                        <span className="post__headerSpecial">
                                            <VerifiedUserIcon className="post__badge" />{' '}{tweet.userName}
                                        </span>
                                    </h3>
                                </div>
                                <div className="post__headerDescription">
                                    <p>{tweet.context}</p>
                                </div>
                            </div>
                            <img src={tweet.imageUrl} alt="" />
                            <div className="post__footer">
                                <ChatBubbleOutlineIcon fontSize="small" className="ChatBubbleOutlineIcon"
                                    onClick={() => navigate(`/${tweet.id}`)} />
                                <RepeatRoundedIcon fontSize="small" className="RepeatRoundedIcon" />
                                <FavoriteBorderIcon fontSize="small" className="FavoriteBorderIcon" />
                                <IosShareOutlinedIcon fontSize="small" className="IosShareOutlinedIcon" />
                            </div>
                        </div>
                        <div>
                            <MoreHorizRoundedIcon
                                className="MoreHorizRounded"
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={handleClose} >
                                    <ListItemIcon>
                                        <DeleteOutlinedIcon className="DeleteMenu"/>
                                    </ListItemIcon>
                                    <ListItemText className="DeleteMenu">
                                        Delete
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PushPinOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Pin to your profile
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <CodeOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Embed Tweet
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <BarChartSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        View Tweet Analytics
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Post;