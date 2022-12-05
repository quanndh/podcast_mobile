import React, { createRef, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import {
  AvatarDefaultSvg,
  StarActiveSvg,
  CheckedUserSvg,
  PlusUserSvg,
  CafeSvg,
  FacebookSmallSvg,
  YoutubeSvg,
  InstaSvg,
} from '../../assets/icons';
import AppButton from '../../components/AppButton';
import AppImage from '../../components/AppImage';
import AppSearchHeader from '../../components/AppSearchHeader';
import AppText from '../../components/AppText';
import Space from '../../components/Space';
import SubcribeSheet, { SubcribeOption } from '../../components/SubcribeSheet';
import { Colors } from '../../constants/colors';
import useTrackingScreen from '../../hooks/useTrackingScreen';
import Benefit from './components/Benefit';
import Content from './components/Content';
import DonateSheet, { DonateForm } from './components/DonateSheet';
import PaymentSheet from './components/PaymentSheet';

const user = {
  name: 'quan nguyen',
  isStar: true,
  isFollow: false,
  intro: `Chào các bạn, mình là Sun. Các bạn đang lắng nghe Sunhuyn Podcast. Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. Cùng lắng nghe và thấu hiểu.`,
  avatar:
    'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
};

export interface PaymentInfo {
  content: string;
  package?: string; //subcribe
  unitPrice: number;
  amount?: string;
  message?: string;
  type: 'subcribe' | 'donate';
}

const CreatorDetail = () => {
  useTrackingScreen();

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

  const sheetRef = createRef<Modalize>();
  const donateRef = createRef<Modalize>();
  const paymentRef = createRef<Modalize>();

  const handlePressViewAll = () => {
    sheetRef.current?.open();
  };

  const handlePressDonate = () => {
    donateRef.current?.open();
  };

  const handleChooseOption = (option: SubcribeOption) => {
    setPaymentInfo({
      content: `Đăng ký hội viên kênh ${user.name}`,
      package: option.name,
      unitPrice: option.fee,
      type: 'subcribe',
    });
    sheetRef.current?.close();
  };

  const handleCloseDonate = () => {
    donateRef.current?.close();
  };

  const handleDonate = (data: DonateForm) => {
    setPaymentInfo({
      ...data,
      content: `Ủng hộ Coffee ${user.name}`,
      message: `Ủng hộ Coffee ${user.name}`,
      unitPrice: 25000,
      type: 'donate',
    });
    donateRef.current?.close();
  };

  const handleClosePayment = () => {
    setPaymentInfo(undefined);
  };

  useEffect(() => {
    if (paymentInfo) {
      setTimeout(() => {
        paymentRef.current?.open();
      }, 0);
    }
  }, [paymentInfo, paymentRef, donateRef]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container} nestedScrollEnabled>
      <View style={{ paddingHorizontal: scale(12) }}>
        <AppSearchHeader />
      </View>
      <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(185, 72, 79, 0.08)']} style={styles.accountInfo}>
        <View style={{ flexDirection: 'row' }}>
          {user.avatar ? (
            <AppImage uri={user.avatar} style={styles.avatar} />
          ) : (
            <AvatarDefaultSvg height={scale(40)} width={scale(40)} />
          )}
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AppText style={styles.name}>{user.name}</AppText>
              <Space size={4} />
              {user.isStar ? <StarActiveSvg /> : null}
            </View>
            <AppText numberOfLines={4} style={styles.intro}>
              {user.intro}
            </AppText>
          </View>
        </View>

        <View style={styles.statisticContainer}>
          <View style={styles.statisticItem}>
            <AppText style={styles.title}>Người theo dõi</AppText>
            <AppText style={styles.statistic}>10</AppText>
          </View>
          <View style={[styles.statisticItem, styles.statisticMid]}>
            <AppText style={styles.title}>Hội viên kênh</AppText>
            <AppText style={styles.statistic}>10</AppText>
          </View>
          <View style={styles.statisticItem}>
            <AppText style={styles.title}>Số tập</AppText>
            <AppText style={styles.statistic}>10</AppText>
          </View>
        </View>
        <AppButton primary title={`Ủng hộ cà phê cho ${user.name}`} icon={<CafeSvg />} onPress={handlePressDonate} />
        {user.isFollow ? (
          <AppButton
            color="grey"
            title="Hội viên đến: 24/12/2023"
            icon={<CheckedUserSvg />}
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        ) : (
          <AppButton title="Theo dõi" icon={<PlusUserSvg />} onPress={handlePressViewAll} />
        )}
        <View style={styles.socialContainer}>
          <FacebookSmallSvg />
          <Space size={16} />
          <YoutubeSvg />
          <Space size={16} />
          <InstaSvg />
        </View>
      </LinearGradient>
      <Benefit onViewAll={handlePressViewAll} onChooseOption={handleChooseOption} />
      <Content onViewAll={handlePressViewAll} />
      <SubcribeSheet
        type="new"
        ref={sheetRef}
        benefits={['a', 'b', 'c']}
        subcribeOptions={[
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
        ]}
        handleChoose={handleChooseOption}
      />
      <DonateSheet ref={donateRef} creator={user.name} onClose={handleCloseDonate} handleDonate={handleDonate} />
      <PaymentSheet ref={paymentRef} payment={paymentInfo} onClose={handleClosePayment} />
      <Space size={112} />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  accountInfo: {
    paddingHorizontal: '12@s',
    paddingVertical: '12@vs',
  },
  avatar: {
    height: '80@s',
    width: '80@s',
    borderRadius: '8@s',
    marginRight: '8@s',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.black,
  },
  intro: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: '8@vs',
    lineHeight: 14,
  },
  statisticContainer: {
    marginTop: '24@s',
    marginBottom: '16@s',

    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: '16@s',
    paddingVertical: '8@vs',
    paddingHorizontal: '20@s',
    width: '100%',
    justifyContent: 'space-between',
  },
  statisticItem: {
    alignItems: 'center',
    flex: 1,
  },
  statisticMid: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: Colors.selectBorder },

  title: {
    marginBottom: '8@vs',
    fontSize: 12,
    color: Colors.grey,
  },
  statistic: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.black,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default CreatorDetail;
