import React from 'react'

// Components
import { Modal, Text, Icon } from '../index'

// Styles
import {
  DialogWrapper,
  DialogBackdrop,
  DialogHeader,
  DialogHeaderButton,
  DialogBody,
  DialogFooter
} from './Dialog.styled'

interface IDialogProps {
  open: boolean
  title: string
  actions: React.ReactNode
  handleClose: () => void
}

const Dialog: React.FC<IDialogProps> = ({
  open = false,
  handleClose,
  title,
  children,
  actions
}) => {
  return (
    <Modal open={open}>
      <DialogBackdrop onClick={handleClose} />
      <DialogWrapper>
        <DialogHeader>
          <Text variant="subtitle1">{title}</Text>
          <DialogHeaderButton onClick={handleClose}>
            <Text variant="subtitle1">
              <Icon library="feather" type="x" width={24} />
            </Text>
          </DialogHeaderButton>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>{actions}</DialogFooter>
      </DialogWrapper>
    </Modal>
  )
}

export default Dialog
