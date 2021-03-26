import { IPaletteGlobal } from './palette'

export interface IBackground {
  paper: string
  main: string
  light: string
  dark: string
}

export interface IGlobal {
  background: IBackground
  palette?: IPaletteGlobal
}
