import Tweet from '../components/Tweet';
import tweets from '../assets/data/tweets';

export default function TweetScreen() {
    return <Tweet tweet={tweets[0]}/>;
}