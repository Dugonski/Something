import styled from "styled-components";

const Container = styled.button`
    background-color: blue;
`

export default function Button(){
    const texto = "texto"
    return(
        <Container>
            {texto}
        </Container>
    )
}