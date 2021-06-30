/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/vins.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";
import { Link } from "gatsby";

export const query = graphql`
  query VinsPageQuery {
    allSanityPage(filter: { slug: { current: { eq: "nos-vins" } } }) {
      edges {
        node {
          title {
            fr
            en
          }
        }
      }
    }
    allSanityGame {
      edges {
        node {
          title
          slug {
            current
          }
          logo {
            asset {
              url
            }
          }
          description {
            _rawFr
            _rawEn
          }
        }
      }
    }
  }
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const VinsPage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <div className={styles.bandeau}></div>
      <div className={styles.domainContain}>
        <SEO title="Vins" />
        {data.allSanityPage.edges.map((item) => (
          <div className={styles.title}>{item.node.title.fr}</div>
        ))}
        <div className={styles.content}>
          {data.allSanityGame.edges.map((games) => (
            <div className={styles.gammes}>
              <img
                src={games.node.logo.asset.url}
                alt=""
                className={styles.logo}
                style={{
                  width: "165px",
                  height: "164px"
                }}
              />
              <div className={styles.block}>
                <h1 className={styles.titleGammes}> {games.node.title} </h1>
                <PortableText
                  blocks={games.node.description._rawFr}
                  serializers={serializers}
                />
                <button>
                  <Link to={"/game/" + `${games.node.slug.current}`}>
                    Voir la gamme
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VinsPage;
