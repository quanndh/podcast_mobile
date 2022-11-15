/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, ImageResizeMode, StyleProp, Platform, ImageStyle as NativeImageStyle } from 'react-native';
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image';
import React from 'react';

interface AppImageProps {
  style?: StyleProp<ImageStyle> | StyleProp<NativeImageStyle>;
  uri: string;
  resizeMode?: ResizeMode;
}

const AppImage: React.FC<AppImageProps> = ({ style, uri, resizeMode }) => {
  if (Platform.OS === 'ios') {
    return (
      <FastImage
        style={style as StyleProp<ImageStyle>}
        source={{
          uri: uri,
        }}
        resizeMode={resizeMode ?? 'cover'}
      />
    );
  }

  return <Image source={{ uri }} style={style as StyleProp<NativeImageStyle>} />;
};

export default AppImage;
