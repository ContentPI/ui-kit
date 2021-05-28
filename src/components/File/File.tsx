// Dependencies
import React, { FC, Fragment } from 'react'
import { getFileInfo, bytesToSize } from '@contentpi/lib'

// Components
import Icon from '../Icon'

// Styles
import {
  StyledFile,
  StyledButton,
  StyledDiv,
  StyledGoodExt,
  StyledInformation,
  StyledInput,
  StyledInvalidExt,
  StyledSpan
} from './File.styled'

interface IProps {
  className?: string
  disabled?: boolean
  hasError?: boolean
  id?: string
  name?: string
  noWrapper?: boolean
  onBlur?(e: any): any
  onChange?(e: any): any
  onClick?(e: any): any
  label?: string
  selectedFile?: any
  maxFileSize?: number
  allowedExtensions?: string[]
}

export const Props = {
  className: '',
  disabled: false,
  hasError: false,
  id: '',
  name: '',
  noWrapper: false,
  onBlur: () => null,
  onChange: () => null,
  onClick: () => null,
  label: '',
  selectedFile: '',
  maxFileSize: 500000,
  allowedExtensions: ['png', 'jpg', 'mp4']
}

export const initialProps = {
  label: 'File',
  selectedFile: {
    size: 50000,
    name: 'File.png'
  }
}

const File: FC<IProps> = props => {
  const {
    label = 'Choose a file',
    name = 'file',
    selectedFile,
    maxFileSize = 12000000,
    allowedExtensions = ['all']
  } = props
  const file = bytesToSize(selectedFile.size, maxFileSize)
  const maxSize = bytesToSize(maxFileSize, maxFileSize, true)
  const { fileName, extension } = getFileInfo(selectedFile.name)
  const isAllowedExt = allowedExtensions.includes(extension) || allowedExtensions.includes('all')

  return (
    <>
      <div
        className="File"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginTop: '5px',
          marginBottom: '20px'
        }}
      >
        <div>
          <StyledFile title={`Max File Size is ${maxSize.size}`}>
            <StyledButton className="button">
              <Icon type="fas fa-upload" /> {label}
            </StyledButton>
            <StyledInput type="file" name={name} id="file" {...props} />
          </StyledFile>
        </div>

        {selectedFile.name && (
          <StyledInformation>
            {fileName}.
            {isAllowedExt ? (
              <StyledGoodExt>{extension}</StyledGoodExt>
            ) : (
              <StyledInvalidExt>{extension}</StyledInvalidExt>
            )}{' '}
            (<span style={{ color: file.allowed ? '#54D48A' : 'red' }}>{file.size}</span>)
          </StyledInformation>
        )}
      </div>

      <StyledDiv>
        <StyledSpan>
          <strong>Max File Size is:</strong> {maxSize.size}
        </StyledSpan>
        <br />
        <StyledSpan>
          <strong>Allowed extensions:</strong>{' '}
          {allowedExtensions.map((ext: string, index: number) => (
            <Fragment key={`file-${index}`}>
              {ext === extension ? (
                isAllowedExt ? (
                  <StyledGoodExt>{ext}</StyledGoodExt>
                ) : (
                  <StyledInvalidExt>{ext}</StyledInvalidExt>
                )
              ) : (
                <>{ext}</>
              )}
              {index < allowedExtensions.length - 1 ? ', ' : ''}
            </Fragment>
          ))}
        </StyledSpan>
      </StyledDiv>
    </>
  )
}

export default File
