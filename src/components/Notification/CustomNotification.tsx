import React, { FC, ReactNode } from 'react'
import { AppearanceTypes, Placement, TransitionState } from 'react-toast-notifications'
import styled from 'styled-components'

type Props = {
  appearance: AppearanceTypes
  autoDismiss: boolean | number
  autoDismissTimeout: number
  children: ReactNode
  isRunning: boolean
  onDismiss: (id?: string) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  placement: Placement
  transitionDuration: number
  transitionState: TransitionState
}

const StyledNotification = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #fff;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }

  &.error {
    background-color: #c74144;
  }

  &.success {
    background-color: #4aa155;
  }

  &.warning {
    background-color: #df954b;
  }

  &.info {
    background-color: #3cabc6;
  }
`

const StyledClose = styled.div`
  margin-left: 5px;
  img {
    width: 10px;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`

const StyledIcon = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`

const CustomNotification: FC<Props> = ({ appearance, children, onDismiss }) => (
  <StyledNotification className={`notification ${appearance}`}>
    <div>
      <StyledIcon>
        <img
          onClick={() => onDismiss()}
          alt="Close"
          src={require(`../../icons/${appearance}.svg`)}
        />
      </StyledIcon>

      {children}
    </div>
    <StyledClose>
      <img onClick={() => onDismiss()} alt="Close" src={require('../../icons/close.svg')} />
    </StyledClose>
  </StyledNotification>
)

export default CustomNotification
