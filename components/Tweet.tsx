import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {TweetType} from '../types/index';
import {Entypo} from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.Container}>
      <Link href={'/Tweet'}>open</Link>
      <Image src={tweet.user.image} style={styles.UserImage} />
      <View style={styles.MainContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.Name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username}</Text>
          <Text style={styles.username}>·3h</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.threeDotsButton}
              onPress={() => console.warn('Three dots clicked')}>
              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="grey"
                style={styles.threeDotsButton}
              />
            </Pressable>
          </View>
        </View>
        <Text style={styles.Content}>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.image} />}

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  MainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  UserImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Name: {
    fontWeight: 'bold',
  },
  Content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 5,
    borderRadius: 15,
    marginVertical: 10,
  },
  username: {
    paddingLeft: 5,
    color: 'grey',
  },
  userInfo: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  threeDotsButton: {
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    backgroundColor: 'lightgrey',
   // display: 'flex',
   // alignItems: 'center',
   // justifyContent: 'center',
    marginHorizontal: 3,
    marginVertical: 3,
  },
  buttonContainer: {
   // display: 'flex',
   // paddingRight: 'auto',
  //  justifyContent: 'flex-end',
    marginLeft: 'auto',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Tweet;
