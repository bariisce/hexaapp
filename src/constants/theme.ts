import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const COLORS = {
  primary: '#2F4F4F',
  secondary: '#CD853F',
  background: '#1A1A1A',
  surface: '#2A2A2A',
  surfaceVariant: '#3A3A3A',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  border: '#404040',
  error: '#FF4444',
};

export const GRADIENTS = {
  primary: ['#4B0082', '#800080'],
  header: ['#1a1a2e', '#4B0082', '#1a1a2e'],
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

type FontWeight = '400' | '500' | '600' | 'bold';

interface TypographyStyle {
  fontSize: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
}

export const TYPOGRAPHY: Record<string, TypographyStyle> = {
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
  },
};

export interface LogoStyle {
  id: string;
  name: string;
  image: any;
}

export const LOGO_STYLES: LogoStyle[] = [
  { id: '1', name: 'No Style', image: require('../assets/logo/nostyle.jpg') },
  { id: '2', name: 'Monogram', image: require('../assets/logo/monogram.jpg') },
  { id: '3', name: 'Gaming', image: require('../assets/logo/gaming.png') },
  { id: '4', name: 'Mascot', image: require('../assets/logo/mascot.png') },
  { id: '5', name: 'Vintage', image: require('../assets/logo/vintage.png') },
  { id: '6', name: 'Modern', image: require('../assets/logo/modern.png') },
  { id: '7', name: 'Abstract', image: require('../assets/logo/abstract.jpg') },
  { id: '8', name: 'Geometric', image: require('../assets/logo/geometric.jpg') },
  { id: '9', name: 'Luxury', image: require('../assets/logo/luxury.jpg') },
  { id: '10', name: 'Sketch', image: require('../assets/logo/sketch.png') },
  { id: '11', name: 'Illustration', image: require('../assets/logo/illustration.jpg') },
  { id: '12', name: 'Symbolic', image: require('../assets/logo/symbolic.png') },
  { id: '13', name: 'Minimalist', image: require('../assets/logo/minimalist.png') },
  { id: '14', name: 'Cartoon', image: require('../assets/logo/cartoon.jpg') },
  { id: '15', name: 'Classic', image: require('../assets/logo/classic.png') },
  { id: '16', name: 'Futuristic', image: require('../assets/logo/futuristic.jpg') },
  { id: '17', name: 'Grunge', image: require('../assets/logo/grunge.jpg') }
]; 