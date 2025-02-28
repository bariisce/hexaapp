import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';

const { width } = Dimensions.get('window');
const COLUMN_COUNT = 3;
const ITEM_MARGIN = SPACING.sm;
const GRID_PADDING = SPACING.md;
const ITEM_WIDTH = (width - (2 * GRID_PADDING) - (COLUMN_COUNT - 1) * ITEM_MARGIN) / COLUMN_COUNT;

export const aiLogoCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    padding: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: 24,
  },
  selectedTypeButton: {
    backgroundColor: COLORS.primary,
  },
  typeButtonIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  typeButtonText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  promptTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  surpriseButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surpriseIcon: {
    fontSize: 20,
    marginRight: SPACING.xs,
  },
  surpriseText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptInputContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
  },
  promptInput: {
    color: COLORS.text,
    ...TYPOGRAPHY.body,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.small,
    textAlign: 'right',
    marginTop: SPACING.sm,
  },
  stylesSection: {
    paddingHorizontal: SPACING.md,
  },
  stylesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  stylesTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  seeAllText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  stylesScroll: {
    flexGrow: 0,
  },
  styleCard: {
    marginRight: SPACING.sm,
    width: 100,
    height: 120,
  },
  selectedStyleCard: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
});

export const aiLogoStylesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: GRID_PADDING,
    paddingVertical: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: ITEM_MARGIN,
  },
  styleCard: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH + 40,
  },
});

export const aiTattooCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    padding: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: 24,
  },
  selectedTypeButton: {
    backgroundColor: '#8B4513',
  },
  typeButtonIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  typeButtonText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  promptTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  surpriseButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surpriseIcon: {
    fontSize: 20,
    marginRight: SPACING.xs,
  },
  surpriseText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptInputContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
  },
  promptInput: {
    color: COLORS.text,
    ...TYPOGRAPHY.body,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.small,
    textAlign: 'right',
    marginTop: SPACING.sm,
  },
  stylesSection: {
    paddingHorizontal: SPACING.md,
  },
  stylesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  stylesTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  seeAllText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  stylesScroll: {
    flexGrow: 0,
  },
  styleCard: {
    marginRight: SPACING.sm,
    width: 100,
    height: 120,
  },
  selectedStyleCard: {
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
});

export const aiTattooStylesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: GRID_PADDING,
    paddingVertical: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: ITEM_MARGIN,
  },
  styleCard: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH + 40,
  },
});

export const aiSignatureCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    padding: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: 24,
  },
  selectedTypeButton: {
    backgroundColor: '#2F4F4F',
  },
  typeButtonIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  typeButtonText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  promptTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  promptInputContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
  },
  promptInput: {
    color: COLORS.text,
    ...TYPOGRAPHY.body,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.small,
    textAlign: 'right',
    marginTop: SPACING.sm,
  },
  stylesSection: {
    paddingHorizontal: SPACING.md,
  },
  stylesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  stylesTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  seeAllText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  stylesScroll: {
    flexGrow: 0,
  },
  styleCard: {
    marginRight: SPACING.sm,
    width: 100,
    height: 120,
  },
  selectedStyleCard: {
    borderWidth: 2,
    borderColor: '#2F4F4F',
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
});

export const aiSignatureStylesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: GRID_PADDING,
    paddingVertical: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: ITEM_MARGIN,
  },
  styleCard: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH + 40,
  },
  title: {
    color: COLORS.text,
    ...TYPOGRAPHY.h2,
    padding: SPACING.md,
  },
  loading: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    padding: SPACING.md,
  },
  error: {
    color: COLORS.error,
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    padding: SPACING.md,
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
}); 

export const aiArtCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    padding: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: 24,
  },
  selectedTypeButton: {
    backgroundColor: '#2F4F4F',
  },
  typeButtonIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  typeButtonText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  promptSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  promptTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  promptInputContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
  },
  promptInput: {
    color: COLORS.text,
    ...TYPOGRAPHY.body,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.small,
    textAlign: 'right',
    marginTop: SPACING.sm,
  },
  stylesSection: {
    paddingHorizontal: SPACING.md,
  },
  stylesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  stylesTitle: {
    color: COLORS.text,
    ...TYPOGRAPHY.subtitle,
  },
  seeAllText: {
    color: COLORS.text,
    ...TYPOGRAPHY.caption,
  },
  stylesScroll: {
    flexGrow: 0,
  },
  styleCard: {
    marginRight: SPACING.sm,
    width: 100,
    height: 120,
  },
  selectedStyleCard: {
    borderWidth: 2,
    borderColor: '#2F4F4F',
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
});

export const aiArtStylesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: GRID_PADDING,
    paddingVertical: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: ITEM_MARGIN,
  },
  styleCard: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH + 40,
  },
  title: {
    color: COLORS.text,
    ...TYPOGRAPHY.h2,
    padding: SPACING.md,
  },
  loading: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    padding: SPACING.md,
  },
  error: {
    color: COLORS.error,
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    padding: SPACING.md,
  },
  createButton: {
    position: 'absolute',
    bottom: 32,
    left: SPACING.md,
    right: SPACING.md,
  },
});