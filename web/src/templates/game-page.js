import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import GamePage from "../components/game-page";

export const query = graphql`
  query GamePageTemplateQuery($id: String!) {
    post: sanityGame(id: { eq: $id }) {
      id
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
        _rawEn
        _rawFr
      }
      produits {
        genre
        slug {
          current
        }
        description {
          _rawEn
          _rawFr
        }
        image {
          asset {
            url
          }
        }
        miniImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

const GamePageTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <GamePage {...post} />}
    </Layout>
  );
};

export default GamePageTemplate;
