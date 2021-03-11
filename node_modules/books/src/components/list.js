import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "@frontity/mars-theme/src/components/featured-media";
const List = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <Items>
            <h2>Books</h2>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <div>

                    <Link key={item.id} link={post.link}>
                        <FeaturedMedia id={post.featured_media}>
                        </FeaturedMedia>
                        <div class ="title"> {post.title.rendered} </div>
                    </Link>
                    </div>
                )
            })}
            <PrevNextNav>
                {data.previous && (
                    <button
                        onClick={() => {
                            actions.router.set(data.previous)
                        }}
                    >
                        &#171; Prev
                    </button>
                )}
                {data.next && (
                    <button
                        onClick={() => {
                            actions.router.set(data.next)
                        }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextNav>
        </Items>

    )
}

export default connect(List)

const Items = styled.div`
  a {
    display: block;
    font-size: 2.4em;
    text-decoration: none;
    text-align: center;
    color: #000;
    margin: 20px 0;
  }
  a:hover {
    text-decoration: underline;
    color: #FBACA5;
  }
  .title {
   margin-top: -80px;
  }
  img {
    height: 300px;
  }
`


const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`