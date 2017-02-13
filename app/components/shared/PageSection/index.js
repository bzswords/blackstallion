import styled, { css } from 'styled-components'

const chunk = css`
  background: url(${props => props.background }) no-repeat fixed top;
  padding: 0 0.5em 0 0.5em;
`

const PageSection = styled.section`
  ${ chunk }
` 

export default PageSection;
