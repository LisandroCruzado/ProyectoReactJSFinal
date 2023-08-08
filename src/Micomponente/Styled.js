import styled from 'styled-components';

const StyledBotton = styled.button`
background: ${(props)=>(props.color ? props.color : 'pink')};
color: white;
padding: 1rem;
font-size: 1rem;
`
export {StyledBotton}