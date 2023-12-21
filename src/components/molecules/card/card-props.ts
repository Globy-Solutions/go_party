import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export enum CardsVariant {
  common = 'common',
  'withImageBackground' = 'withImageBackground',
}

export type CardProps = {
  children?: React.ReactNode | React.ReactNode[];
  variant?: keyof typeof CardsVariant;
  name: string;
  picture: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}