import styled from 'styled-components'

export const ItemCondition = styled.p`
color: ${props => props.cond === 0 ? 'black' : 'white'};
background-color: ${props => props.cond === 0 ? '#ffb300b3' : '#bfbfbf'};
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

const num = () => Math.floor(Math.random() * 256)

export const ItemContainerStyle = styled.div`
background: url('https://i.postimg.cc/d3Ljbwry/5551771.jpg'), linear-gradient(110deg, rgb(${num()},${num()},${num()}), rgb(${num()},${num()},${num()}));
background-blend-mode: soft-light;
`