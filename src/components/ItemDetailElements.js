import styled from 'styled-components'

export const ItemCondition = styled.p`
color: ${({ cond }) => cond === 0 ? 'black' : 'white'};
background-color: ${({ cond }) => cond === 0 ? '#80808038' : '#bfbfbf'};
font-weight: 600;
width: fit-content;
padding: 0 .325em;
margin: .2em 0;
border-radius:5px ;
-webkit-border-radius:5px ;
-moz-border-radius:5px ;
-ms-border-radius:5px ;
-o-border-radius:5px ;
`

