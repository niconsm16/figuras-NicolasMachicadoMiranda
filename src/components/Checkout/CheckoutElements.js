import styled from 'styled-components'

const num = () => Math.floor(Math.random() * 256)

export const ItemContainerStyle = styled.div`
background: url('https://i.postimg.cc/d3Ljbwry/5551771.jpg'), linear-gradient(110deg, rgb(${num()},${num()},${num()}), rgb(${num()},${num()},${num()}));
background-blend-mode: soft-light;
`