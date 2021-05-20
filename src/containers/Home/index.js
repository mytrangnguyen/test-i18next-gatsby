import React from "react";
// import { Form, Row, Col, Input, Button, Divider } from "antd";
import PublicLayout from "@uikit/layouts/PublicLayout";
import Footer from "@uikit/layouts/Footer";
import WrapHomeStyles from "./styles";
// import i18n from "../../i18n/index";
import { graphql } from "gatsby";

const DealerInnovations = () => {
  return (
    <PublicLayout>
      <WrapHomeStyles>
        <div className="content-home">
          <Footer />
        </div>
      </WrapHomeStyles>
    </PublicLayout>
  );
};

export default DealerInnovations;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
