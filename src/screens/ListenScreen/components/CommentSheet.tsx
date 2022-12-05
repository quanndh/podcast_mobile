import React, { createRef, FC } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, CloseSvg, SendSvg } from '../../../assets/icons';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import type { CommentProps } from '../../../components/Comment';
import Comment from '../../../components/Comment';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DEVICE_HEIGHT } from '../../../constants/variables';

interface CommentSheetProps {
  firstComment: {
    avatar: string;
    comment: string;
  };
  nComment: number;
}

const user = {
  avatar:
    'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
};

const comments: CommentProps[] = [
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 1,
    isLike: true,
    reply: [
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
    ],
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 0,
    isLike: false,
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 0,
    isLike: false,
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 0,
    isLike: false,
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 1,
    isLike: true,
    reply: [
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
    ],
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 1,
    isLike: true,
    reply: [
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
    ],
  },
  {
    name: 'quannguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    comment:
      'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
    createdAt: '03 Dec 2022',
    like: 214,
    replies: 1,
    isLike: true,
    reply: [
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
      {
        name: 'quannguyen',
        avatar:
          'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
        comment: 'reply',
        createdAt: '03 Dec 2022',
      },
    ],
  },
];

const CommentSheet: FC<CommentSheetProps> = ({ firstComment, nComment }) => {
  const ref = createRef<Modalize>();

  const handleOpenComment = () => {
    ref.current?.open();
  };

  const renderItem = ({ item }: { item: CommentProps }) => {
    return <Comment {...item} />;
  };

  const renderFooter = () => {
    return (
      <View style={styles.inputContainer}>
        {user.avatar ? (
          <AppImage style={[styles.avatar, { alignSelf: 'center' }]} uri={user.avatar} />
        ) : (
          <AvatarDefaultSvg height={scale(16)} width={scale(16)} />
        )}
        <TextInput style={styles.input} placeholder="Viết bình luận" />
        <TouchableOpacity>
          <SendSvg />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleOpenComment}>
        <AppText style={styles.title}>Bình luận ({nComment})</AppText>
        <View style={styles.row}>
          {firstComment.avatar ? (
            <AppImage uri={firstComment.avatar} style={styles.avatar} />
          ) : (
            <AvatarDefaultSvg height={scale(14)} width={scale(14)} />
          )}
          <AppText style={styles.text}>{firstComment.comment}</AppText>
        </View>
      </TouchableOpacity>
      <BottomSheet
        ref={ref}
        snapPoint={DEVICE_HEIGHT / 2.2}
        withOverlay={false}
        flatlistProps={{
          data: comments,
          renderItem: renderItem,
          keyExtractor: (_, index) => String(index) + 'comment',
          ItemSeparatorComponent: () => <Space size={20} />,
          ListFooterComponent: <Space size={40} />,
          showsVerticalScrollIndicator: false,
        }}
      />
      <BottomSheet
        ref={ref}
        snapPoint={DEVICE_HEIGHT / 2.2}
        withOverlay={false}
        footer={renderFooter}
        flatlistProps={{
          data: comments,
          showsVerticalScrollIndicator: false,
          renderItem: renderItem,
          keyExtractor: (_, index) => String(index) + 'comment',
          ItemSeparatorComponent: () => <Space size={20} />,
          ListFooterComponent: <Space size={40} />,
          ListHeaderComponent: (
            <>
              <View style={styles.row}>
                <AppText style={styles.modalTitle}>Bình luận ({nComment})</AppText>
                <TouchableOpacity onPress={() => ref.current?.close()}>
                  <CloseSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </>
          ),
        }}
      />
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.transactionBg,
    padding: '8@s',
    borderRadius: '8@s',
    marginBottom: '24@s',
    marginHorizontal: '12@s',
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    marginBottom: '8@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    height: '14@s',
    width: '14@s',
    borderRadius: '14@s',
    alignSelf: 'flex-start',
    marginRight: '8@s',
  },
  text: {
    color: Colors.authorText,
    fontSize: 12,
    flex: 1,
  },
  modalTitle: {
    fontWeight: '500',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.selectBorder,
    marginVertical: '10@vs',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: '8@vs',
    marginBottom: '8@vs',
    alignItems: 'center',
  },
  input: {
    backgroundColor: Colors.white,
    flex: 1,
    marginRight: '8@s',
    paddingHorizontal: '8@s',
    paddingVertical: '3@vs',
    fontSize: 14,
    color: Colors.black,
    borderRadius: '4@s',
  },
});

export default CommentSheet;
