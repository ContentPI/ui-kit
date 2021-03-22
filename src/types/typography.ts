export interface IHeading {
  fontFamily: string
  fontWeight: number | string
  fontSize: string
  lineHeight: number | string
  letterSpacing: string
}

export interface ITypography {
  htmlFontSize: number | string
  fontFamily: string
  fontSize: number | string
  h1: IHeading
  h2: IHeading
  h3: IHeading
  h4: IHeading
  h5: IHeading
  h6: IHeading
  subtitle1: IHeading
  subtitle2: IHeading
  paragraph1: IHeading
  paragraph2: IHeading
  caption1: IHeading
  caption2: IHeading
  label: IHeading
}

type ValueOf<T> = T[keyof T]

export const Typography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  paragraph1: 'paragraph1',
  paragraph2: 'paragraph2',
  caption1: 'caption1',
  caption2: 'caption2',
  label: 'label'
} as const
export type Typography = ValueOf<typeof Typography>
export const Typographys = Object.keys(Typography)

export const TypographyTag: Record<Typography, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  paragraph1: 'p',
  paragraph2: 'p',
  caption1: 'span',
  caption2: 'span',
  label: 'label'
}
