import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import Home from "./home"

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Head>
                <title>Nicholas Sparks - American Novelist</title>
                <meta
                    name="Nicholas Sparks is a famous author.."
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
        <Global
            styles={css`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              html {
                font-family: Verdana, sans-serif; 
              }
              h1,h2,h3,h4,h5,h6 {
                font-weight: 300;
               }
   
        `}
            />

            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <div id="top"> </div>
                <HeaderContent>
                <h1>Nicholas Sparks</h1>
                <p id="site-description">American Novelist</p>
                <Menu>
                    <Link link="/">Home</Link>
                    <br />
                    <Link link="/author-bio">About</Link>
                    <br />
                    <Link link="/book">Books</Link>
                    <br />
                    <Link link="/contact">Contact Us</Link>
                </Menu>
                </HeaderContent>
            </Header>
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Home when={data.isHome} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Page when={data.isBook} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
  background-color: #ededed;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? '#FBACA5' : '#61adad' ) : 'lightgrey'};

  h1 {
    color: #4c4c4c;
    font-size: 49px;
    text-align: center;
    font-weight: 200;
  }
  #site-description {
    text-align: center;
    line-height: 1.5;
    font-size: 0.9em;
    padding-top: 5px;
  }
  #top {
    background-color: #FBACA5;
    color: #FBACA5;
    padding: 6px 0;
}
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
    height: auto;
  }
  h2 {
    margin: 0.5em 0;
    color: #61adad;
    font-family: lato;
    font-size: 40px;
    padding: 30px 0;
  }
  h3 {
    color: #61ADAD;
    font-size: 40px;
    margin: 50px 0 40px 0;
  }
  p {
    line-height: 1.5em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  .shortcode_review {  
    margin-top: 50px;
    width: 60%;
  
    h4 {
        color: #61adad;
        font-size: 28px;
        margin-bottom: 18px;
    }
    h5 {
        padding: 12px 0;
    }    
    a {
       text-decoration: none;
       color: #faaca5;
       font-size: 23px;
    }
    a:hover {
       text-decoration: underline;
    }
    ul {
        list-style: none;
        padding-top: 5px;
        font-size: 14px;
        li {
            padding: 4px 2%;
        }
    }
    p {
        margin-top: 20px;
        line-height: 1.5;
    }
}   
.book_details {
    margin: 20px 0;
    
    ul {
        list-style: none;
        font-size: 16px;
    }
    h4 {
      color: #61adad;
      font-size: 28px;
      margin-bottom: 18px;
      margin-top: 40px;
    }
    h6 {
    color: #faaca5;
    font-size: 23px;
    margin-top: 30px;
    }
}
.review-details, .review-content {
   display:none;
}
.review_body p{
    font-size: 16px;
    color: #5c5c5c;
}  
.review-detail ul li{
    font-size: 14px;
}
blockquote {
    color: #faaca5;
    font-style: italic;
    margin: 50px 10%;
    width: 80%;
    text-align: center;
   }
.wp-block-image {
    margin: 30px 0;
    width: 80%;
    height: auto;
}
.wp-block-columns {
    display: flex;
    width: 100%;
    
    .wp-block-column {
        width: 40%;
        
        h5 {
            color: #61adad;
            font-size: 23px;
            margin: 40px 0 10px 0;
        }
        ul {
            list-style: none;
            
            li {
                padding: 8px 0;
                font-size: 17px
                font-weight: 300;
            }
        }
    }
}
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  font-size: 16px;
  margin-left: 1em;
  
  & > a {
    margin-right: 1em;
    color: #000;
    text-decoration: none;
    padding-top: 30px;
    padding-right: 25px;
 }
 
 a:hover {
     color: #fbaca5;
 }
`