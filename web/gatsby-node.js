const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

async function CreateGamePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityGame(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
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
            _rawDescription
            produits {
              genre
              _rawDescription
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
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityGame || {}).edges || [];

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/game/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/game-page.js"),
      context: { id },
    });
  });
}

async function ProduitPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProduit(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            game {
              logo {
                asset {
                  url
                }
              }
              title
            }
            _rawFiche
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityProduit || {}).edges || [];

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/produit/${slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/produit-page.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await CreateGamePages(graphql, actions);
  await ProduitPages(graphql, actions);
};
