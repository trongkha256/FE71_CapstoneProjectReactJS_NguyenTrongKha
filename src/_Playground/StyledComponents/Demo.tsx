import { Button, PrimaryButton } from './Demo.styles'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
    white: "#fff",
    black: "#333",
    red: "#f00",

}
const GlobalStyle = createGlobalStyle`
        body{
            margin:0;
            padding:0;
            box-sizing: border-box;
            min-height:100vh;
            background-color: pink;
        }
    `

type Props = {}

const Demo = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button disabled>Submit</Button>
            <Button>Submit</Button>
            <PrimaryButton>Submit</PrimaryButton>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default Demo