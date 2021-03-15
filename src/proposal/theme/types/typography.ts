export interface IHeading {
  fontFamily: string
  fontWeight: number
  fontSize: string
  lineHeight: number
  letterSpacing: string
}

export default interface ITypography {
  htmlFontSize: 16
  fontFamily: ''
  fontSize: 14
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
