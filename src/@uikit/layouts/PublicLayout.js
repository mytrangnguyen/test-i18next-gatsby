import React from 'react';
import PropTypes from 'prop-types';
import CMSComponent from '@uikit';
import { Layout } from 'antd';

const { Header } = CMSComponent;

export default function PublicLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
      {/* <Footer /> */}
    </Layout>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.any,
};
