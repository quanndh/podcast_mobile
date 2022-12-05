import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, HeartGreyCommentSvg, HeartRedCommentSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';
import AppText from '../AppText';

export interface CommentProps {
  avatar: string;
  comment: string;
  name: string;
  createdAt: string;
  like?: number;
  replies?: number;
  isLike?: boolean;
  reply?: CommentProps[];
}

const Comment: FC<CommentProps> = ({
  avatar,
  comment,
  name,
  createdAt,
  like = 0,
  replies = 0,
  isLike = false,
  reply = [],
}) => {
  const [nLike, setNLike] = useState(like);
  const [meLike, setMeLike] = useState(isLike);
  const [showReply, setShowReply] = useState(false);

  const toggleLike = () => {
    if (meLike) {
      setNLike((n) => n - 1);
    } else {
      setNLike((n) => n + 1);
    }
    setMeLike((l) => !l);
  };

  const handleShowReply = () => {
    setShowReply(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {avatar ? (
          <AppImage uri={avatar} style={styles.avatar} />
        ) : (
          <AvatarDefaultSvg height={scale(16)} width={scale(16)} />
        )}
        <AppText style={styles.name}>{name} </AppText>
        <AppText style={styles.createdAt}>{createdAt}</AppText>
      </View>
      <AppText style={styles.comment}>{comment}</AppText>
      <View style={styles.row}>
        <TouchableOpacity onPress={toggleLike}>
          {meLike ? (
            <HeartRedCommentSvg height={scale(18)} width={scale(14)} />
          ) : (
            <HeartGreyCommentSvg height={scale(18)} width={scale(14)} />
          )}
        </TouchableOpacity>
        <AppText style={{ marginLeft: scale(4), color: meLike ? Colors.accent : Colors.grey }}>{nLike}</AppText>
      </View>
      {replies > 0 && !showReply && (
        <TouchableOpacity onPress={handleShowReply}>
          <AppText style={styles.reply}>{replies} phản hồi</AppText>
        </TouchableOpacity>
      )}
      {showReply &&
        reply.map((x, index) => (
          <View style={{ marginTop: scale(8), marginLeft: scale(12) }} key={String(index) + 'reply'}>
            <View style={styles.row}>
              {avatar ? (
                <AppImage uri={avatar} style={styles.avatar} />
              ) : (
                <AvatarDefaultSvg height={scale(16)} width={scale(16)} />
              )}
              <AppText style={styles.name}>{x.name} </AppText>
              <AppText style={styles.createdAt}>{x.createdAt}</AppText>
            </View>
            <AppText style={{ marginTop: scale(8) }}>{x.comment}</AppText>
          </View>
        ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: '16@s',
    width: '16@s',
    borderRadius: '16@s',
    alignSelf: 'flex-start',
    marginRight: '8@s',
  },
  name: {
    marginRight: '8@s',
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black,
  },
  createdAt: {
    fontSize: 12,
    color: Colors.grey,
  },
  comment: {
    marginVertical: '8@vs',
    color: Colors.black,
  },
  reply: {
    marginTop: '8@vs',
    marginLeft: '12@s',
    color: Colors.accent,
    fontWeight: '700',
  },
});

export default Comment;
