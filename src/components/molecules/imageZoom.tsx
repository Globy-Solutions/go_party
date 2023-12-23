import { hp } from '@utils/_dimensions';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useGestures } from '@core/hooks/useGestures';
import { useImageLayout } from '@core/hooks/useImageLayout';

import type { ImageZoomProps } from '@core/hooks/types/useGesturesProps';

const styles = StyleSheet.create({
  image: {
    flex: 2,
    height: hp(70)
  }
});

const ImageZoom: React.FC<ImageZoomProps> = ({
  uri = '',
  minScale,
  maxScale,
  minPanPointers,
  maxPanPointers,
  isPanEnabled,
  isPinchEnabled,
  onInteractionStart,
  onInteractionEnd,
  onPinchStart,
  onPinchEnd,
  onPanStart,
  onPanEnd,
  onLayout,
  style = {},
  ...props
}) => {
  const { center, onImageLayout } = useImageLayout({ onLayout });
  const { animatedStyle, gestures } = useGestures({
    center,
    isPanEnabled,
    isPinchEnabled,
    maxPanPointers,
    maxScale,
    minPanPointers,
    minScale,
    onInteractionEnd,
    onInteractionStart,
    onPanEnd,
    onPanStart,
    onPinchEnd,
    onPinchStart
  });

  return (
    <GestureDetector gesture={gestures}>
      <Animated.Image
        style={[styles.image, style, animatedStyle]}
        source={{ uri }}
        resizeMode="contain"
        onLayout={onImageLayout}
        {...props}
      />
    </GestureDetector>
  );
};

export default ImageZoom