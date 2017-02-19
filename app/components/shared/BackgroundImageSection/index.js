import styled, { css } from 'styled-components'

const chunk = css`
  position: relative;
  background: url(${props => props.background}) no-repeat fixed top;
`

const BackgroundImageSection = styled.div`
  ${ chunk }
`

export default BackgroundImageSection;
