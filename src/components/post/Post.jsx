import "./Post.css"
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {
    // useDispatch,
     useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const tweets = useSelector((state) => state.stories.tweets);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
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
                                <RepeatRoundedIcon fontSize="small" className="RepeatRoundedIcon"/>
                                <FavoriteBorderIcon fontSize="small" className="FavoriteBorderIcon"/>
                                <IosShareOutlinedIcon fontSize="small" className="IosShareOutlinedIcon"/>
                            </div>
                        </div>
                        <div>
                            <MoreHorizRoundedIcon className="MoreHorizRounded"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Post;