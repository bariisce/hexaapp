import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const COLORS = {
  primary: '#2F4F4F',
  secondary: '#CD853F',
  background: '#1A1A1A',
  surface: '#2A2A2A',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  border: '#404040',
  error: '#FF4444',
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: '700',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const GRID_PADDING = SPACING.md;
export const ITEM_MARGIN = SPACING.sm;
export const ITEM_WIDTH = (SCREEN_WIDTH - 2 * GRID_PADDING - 2 * ITEM_MARGIN) / 3; 