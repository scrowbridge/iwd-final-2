import React from "react"
import { connect,css, styled, } from "frontity"

const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const home = state.source[data.type][data.id]

    return (
        <Main>
            <div dangerouslySetInnerHTML={{ __html: home.content.rendered }} />
        </Main>
    )
}

export default connect(Home)

const Main = styled.main`
 margin-top: 50px;   
`