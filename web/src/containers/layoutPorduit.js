import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import LayoutProduit from "../components/layoutProduit";

const query = graphql`
  query SiteTitleQuery1 {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const [nav, showNav] = useState(false);

  const [show, showShow] = useState(false);

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
            <LayoutProduit
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            nav={nav}
            show={show}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
