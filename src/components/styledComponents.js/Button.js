import styled from 'styled-components'

function Button ({borderRadius, children, width}){
  return (
    <ButtonWrapper width={width} borderRadius={borderRadius}  >{children}</ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  width: ${props => props.width || '200px'};
  height: 50px;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  padding: 10px;
  font-size: 20px;
`;

export default Button