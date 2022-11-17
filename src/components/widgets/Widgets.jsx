import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1581878060252790784"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Alhamdhulillaah"
                    options={{ height: 400 }}
                />
                <TwitterShareButton 
                url={"https://medium.com/@armanvenska"}
                options={{text: "I'm writing experiences in learning #reactjs right now. Check it out on my medium!"}}/>
            </div>
        </div>
    )
};

export default Widgets;