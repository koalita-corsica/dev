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
import * as styles from "../pages/domaine.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";
import laura from "../asset/domainelaura.jpg";
import domainImg1 from "../asset/domainetonneau.jpg";
import domainImg2 from "../asset/domainevigne.jpg";
import domainImg3 from "../asset/domainelabo.jpg";

export const query = graphql`
  query DomainePageQuery {
    allSanityPage(filter: { slug: { current: { eq: "le-domaine" } } }) {
      edges {
        node {
          title {
            fr
            en
          }
          pageBuilder {
            title1 {
              fr
              en
            }
            desc {
              _rawEn
              _rawFr
            }
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

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  let script = document.createElement("script");
  script.src = "https://cdn.ampproject.org/v0.js";
  script.async = true;
  document.body.appendChild(script);
}

if (isBrowser) {
  var meta = document.createElement('meta')
  meta.httpEquiv = 'cache-control'
  meta.content = 'max-age=31536000'
  document.getElementsByTagName('head')[0].appendChild(meta)
}

const DomainePage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      {data.allSanityPage.edges.map((item) => (
        <React.Fragment>
          <div className={styles.wrapperDomain}>
            <div className={styles.section1Domaine}>
              <div className={styles.block1}>
                <h1 className={styles.titlesec1}> {item.node.pageBuilder[0].title1.fr} </h1>
                <PortableText
                  blocks={item.node.pageBuilder[0].desc._rawFr}
                  serializers={serializers}
                />
              </div>
            </div>
            <div className={styles.section2}>
              <amp-img
                src={laura}
                Layout="responsive"
                style={{
                  height: "310px",
                  width: "310px",
                  borderRadius: "100%",
                }}
              />
              <h2> {item.node.pageBuilder[1].title1.fr} </h2>
              <div className={styles.block2}>
                <PortableText
                  blocks={item.node.pageBuilder[1].desc._rawFr}
                  serializers={serializers}
                />
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.domainImg1}>
                <amp-img src={domainImg1} 
                  Layout="responsive" 
                  // style={{
                  //   height: "310px",
                  //   width: "310px",
                  //   borderRadius: "100%",
                  //   marginTop: "5vh",
                  // }}
                />
              </div>
              <div className={styles.domainImg2}>
                <amp-img src={domainImg2} 
                  Layout="responsive" 
                  // style={{
                  //   height: "310px",
                  //   width: "310px",
                  //   borderRadius: "100%",
                  //   marginTop: "5vh",
                  // }}
                />
              </div>
              <div className={styles.domainImg3}>
                <amp-img src={domainImg3} 
                  Layout="responsive" 
                  // style={{
                  //   height: "310px",
                  //   width: "310px",
                  //   borderRadius: "100%",
                  //   marginTop: "5vh",
                  // }}
                />
              </div>
              {/* <div className={styles.domainImg1}></img></div>
              <div className={styles.domainImg2}><img src={domainImg2}></img></div>
              <div className={styles.domainImg3}><img src={domainImg3}></img></div> */}
            </div>
          </div>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default DomainePage;
