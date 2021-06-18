import React, { FC } from 'react'
import styled from 'styled-components'

import type { Position } from './types'
import { gutter } from './ToastElement'

export type Props = {
  children?: Node
  hasToasts: boolean
  placement: Position
}

const StyledContainer = styled.div`
  boxsizing: border-box;
  maxheight: 100%;
  maxwidth: 100%;
  overflow: hidden;
  padding: gutter;
  position: fixed;
  zindex: 1000;

  .noToasts {
    pointerevents: none;
  }

  .top-left {
    top: 0;
    left: 0;
  }

  .top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .top-right {
    top: 0;
    right: 0;
  }

  .bottom-left {
    bottom: 0;
    left: 0;
  }

  .bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .bottom-right {
    bottom: 0;
    right: 0;
  }
`

export const ToastContainer: FC<Props> = ({ hasToasts, placement, ...props }) => (
  <StyledContainer className={`${placement} ${!hasToasts ? 'noToasts' : ''}`} {...props} />
)
