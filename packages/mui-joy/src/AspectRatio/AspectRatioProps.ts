import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { ColorPaletteProp, SxProps, VariantProp, ApplyColorInversion } from '../styles/types';
import { CreateSlotsAndSlotProps, SlotProps } from '../utils/types';

export type AspectRatioSlot = 'root' | 'content';

export interface AspectRatioPropsColorOverrides {}
export interface AspectRatioPropsVariantOverrides {}

export type AspectRatioSlotsAndSlotProps = CreateSlotsAndSlotProps<
  AspectRatioSlot,
  {
    root: SlotProps<'div', {}, AspectRatioOwnerState>;
    content: SlotProps<'div', {}, AspectRatioOwnerState>;
  }
>;

export interface AspectRatioTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P &
    AspectRatioSlotsAndSlotProps & {
      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       * @default 'neutral'
       */
      color?: OverridableStringUnion<ColorPaletteProp, AspectRatioPropsColorOverrides>;
      /**
       * Used to render icon or text elements inside the AspectRatio if `src` is not set.
       * This can be an element, or just a string.
       */
      children?: React.ReactNode;
      /**
       * The minimum calculated height of the element (not the CSS height).
       */
      minHeight?: number | string;
      /**
       * The maximum calculated height of the element (not the CSS height).
       */
      maxHeight?: number | string;
      /**
       * The CSS object-fit value of the first-child.
       * @default 'cover'
       */
      objectFit?: React.CSSProperties['objectFit'];
      /**
       * The aspect-ratio of the element. The current implementation uses padding instead of the CSS aspect-ratio due to browser support.
       * https://caniuse.com/?search=aspect-ratio
       * @default '16 / 9'
       */
      ratio?: number | string;
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx?: SxProps;
      /**
       * The variant to use.
       * @default 'soft'
       */
      variant?: OverridableStringUnion<VariantProp, AspectRatioPropsVariantOverrides>;
    };
  defaultComponent: D;
}

export type AspectRatioProps<
  D extends React.ElementType = AspectRatioTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<AspectRatioTypeMap<P, D>, D>;

export interface AspectRatioOwnerState extends ApplyColorInversion<AspectRatioProps> {}
