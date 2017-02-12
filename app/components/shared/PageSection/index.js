import styled, { css } from 'styled-components'

const chunk = css`
  background: ${props => props.background || 'white' };
`

const PageSection = styled.section`
  ${ chunk }
` 

export default PageSection;
