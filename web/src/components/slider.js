import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import PortableText from "./portableText";

import * as styles from "./slider.module.css";

const game = [];

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  let script = document.createElement("script");
  script.src = "https://cdn.ampproject.org/v0.js";
  script.async = true;
  document.body.appendChild(script);
}
const Slider = ({ data, count }) => (
  data.allSanityGame.edges.map((item) => game.push(item.node)),
  (
    <div className={styles.slide}>
      
      <img
        className={styles.sliderBot}
        src={game[count].produits[0].image.asset.url}
        alt=""
      />
      
      <div className={styles.content}>
        <img
          src={game[count].logo.asset.url}
          alt=""
          className={styles.sliderLogo}
          width='300'
          height='200'
        />
        <h1 className={styles.title}> {game[count].title} </h1>
        <PortableText
          blocks={game[count].description._rawFr}
          className={styles.desc}
        />
        <button>
          <Link
            to={"/game/" + `${game[count].slug.current}`}
            className={styles.btn}
          >
            VOIR PLUS
          </Link>
        </button>
      </div>
    </div>
  )
);
export default function MySlider(props) {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityGame {
            edges {
              node {
                title
                slug {
                  current
                }
                description {
                  _rawFr
                  _rawEn
                }
                logo {
                  asset {
                    url
                  }
                }
                produits {
                  image {
                    asset {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Slider data={data} {...props} />}
    />
  );
}
