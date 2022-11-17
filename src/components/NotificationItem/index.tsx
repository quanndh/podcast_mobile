import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';
import moment from 'moment';

interface NotificationItemProps {
  username: string;
  avatar: string;
  content: string;
  message?: string;
  thumbnail?: string;
  isSeen: boolean;
  createdAt: number;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  username,
  avatar,
  content,
  message,
  thumbnail,
  isSeen,
  createdAt,
}) => {
  return (
    <TouchableOpacity style={[styles.container, isSeen ? styles.containerSeen : {}]}>
      <View style={styles.row}>
        <View style={styles.row}>
          {avatar ? (
            <AppImage uri={avatar} style={styles.avatar} />
          ) : (
            <AvatarDefaultSvg height={scale(28)} width={scale(28)} />
          )}
          <View style={styles.textContainer}>
            <Text>
              <Text style={styles.name}>{username}</Text> {content}
            </Text>
            <Text style={styles.time}>{moment(createdAt).fromNow()}</Text>
          </View>
        </View>
        {thumbnail && <AppImage uri={thumbnail} style={styles.thumbnail} />}
      </View>
      {message && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            <Text style={styles.textBold}>Lời nhắn:</Text> {message}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: '16@s',
    padding: '16@s',
    backgroundColor: 'rgba(185, 72, 79, 0.1)',
  },
  containerSeen: {
    backgroundColor: '#f8f8f8',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  avatar: {
    height: '28@s',
    width: '28@s',
    borderRadius: '28@s',
    marginRight: '8@s',
  },
  name: {
    color: Colors.accent,
    fontSize: 14,
    lineHeight: 17,
  },
  thumbnail: {
    height: '32@s',
    width: '32@s',
    borderRadius: '8@s',
    marginLeft: '8@s',
  },
  time: {
    color: Colors.grey,
    marginTop: '4@vs',
  },
  messageContainer: {
    backgroundColor: Colors.white,
    padding: '16@s',
    marginTop: '16@s',
    borderRadius: '8@s',
  },
  textBold: {
    fontWeight: '500',
    lineHeight: 17,
    color: Colors.black,
  },
  message: {
    color: Colors.grey,
  },
});

export default NotificationItem;
