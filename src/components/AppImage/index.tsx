import { StyleProp, View } from 'react-native';
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image';
import React, { useState } from 'react';
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder';

interface AppImageProps {
  style?: StyleProp<ImageStyle>;
  uri: string;
  resizeMode?: ResizeMode;
}

const AppImage: React.FC<AppImageProps> = ({ style, uri, resizeMode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <FastImage
        style={style as StyleProp<ImageStyle>}
        source={{
          uri: uri,
        }}
        resizeMode={resizeMode ?? 'cover'}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <Placeholder Animation={Fade} style={{ position: 'absolute', zIndex: 8, top: 0, left: 0 }}>
          <PlaceholderMedia style={style} />
        </Placeholder>
      )}
    </View>
  );
};

export default AppImage;
