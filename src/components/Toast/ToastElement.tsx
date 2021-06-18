import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { CheckIcon, FlameIcon, InfoIcon, CloseIcon, AlertIcon } from './icons'
import * as colors from './colors'
import type { HoverFn, Placement } from './types'
import { NOOP } from './utils'

// common
export const borderRadius = 4
export const gutter = 8
export const toastWidth = 360
export const shrinkKeyframes = keyframes`from { height: 100%; } to { height: 0% }`

// @ts-ignore
const A11yText = ({ tag: Tag, ...props }) => (
  <Tag
    css={{
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    }}
    {...props}
  />
)

const appearances: any = {
  success: {
    icon: CheckIcon,
    text: colors.G500,
    fg: colors.G300,
    bg: colors.G50
  },
  error: {
    icon: FlameIcon,
    text: colors.R500,
    fg: colors.R300,
    bg: colors.R50
  },
  warning: {
    icon: AlertIcon,
    text: colors.Y500,
    fg: colors.Y300,
    bg: colors.Y50
  },
  info: {
    icon: InfoIcon,
    text: colors.N400,
    fg: colors.B200,
    bg: 'white'
  }
}

const StyledButton = styled.div`
  cursor: pointer;
  flexshrink: 0;
  opacity: 0.5;
  padding: ${gutter}px ${gutter * 1.5}px;
  transition: opacity 150ms;

  &:hover: {
    opacity: 1;
  }
`

const Button = (props: any) => <StyledButton {...props} />

const StyledContent = styled.div`
  flexgrow: 1;
  fontsize: 14;
  lineheight: 1.4;
  minheight: 40;
  padding: ${gutter}px ${gutter * 1.5}px;
`

const Content = (props: any) => <StyledContent {...props} />

type CountdownProps = {
  autoDismissTimeout: number
  opacity: string
  isRunning: boolean
}

const StyledCountdown = styled.div<CountdownProps>`
  animation: ${shrinkKeyframes} ${props => props.autoDismissTimeout}ms linear;
  animationplaystate: ${props => (props.isRunning ? 'running' : 'paused')};
  backgroundcolor: rgba(0, 0, 0, 0.1);
  bottom: 0;
  height: 0;
  left: 0;
  ${props => props.opacity};
  position: absolute;
  width: 100%;
`

const Countdown: FC<any> = (props: any) => <StyledCountdown {...props} />

function getTranslate(placement: string) {
  const pos = placement.split('-')
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1]
  const translateMap: any = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)'
  }

  return translateMap[relevantPlacement]
}

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited'

const toastStates = (placement: Placement) => ({
  entering: { transform: getTranslate(placement) },
  entered: { transform: 'translate3d(0,0,0)' },
  exiting: { transform: 'scale(0.66)', opacity: 0 },
  exited: { transform: 'scale(0.66)', opacity: 0 }
})

const ToastElement = ({
  appearance,
  placement,
  transitionDuration,
  transitionState,
  ...props
}: any) => {
  const [height, setHeight] = useState('auto')
  const elementRef = useRef<any>(null)

  useEffect(() => {
    if (transitionState === 'entered') {
      const el = elementRef.current
      setHeight(el.offsetHeight + gutter)
    }

    if (transitionState === 'exiting') {
      setHeight(0)
    }
  }, [transitionState])

  return (
    <div
      ref={elementRef}
      style={{ height }}
      style={{
        transition: `height ${transitionDuration - 100}ms 100ms`
      }}
    >
      <div
        className={`react-toast-notifications__toast react-toast-notifications__toast--${appearance}`}
        css={{
          backgroundColor: appearances[appearance].bg,
          borderRadius,
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
          color: appearances[appearance].text,
          display: 'flex',
          marginBottom: gutter,
          maxWidth: '100%',
          transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${transitionDuration}ms`,
          width: toastWidth,
          ...toastStates(placement)[transitionState]
        }}
        {...props}
      />
    </div>
  )
}
