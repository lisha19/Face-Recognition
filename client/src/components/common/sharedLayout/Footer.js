import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: 'center' }}>
    <span>&copy; Be On Time {new Date().getFullYear()}</span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/privacypolicy">About the site</Link></span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/termandcondition">Term & Condition</Link></span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/userguidelines">User Guidelines</Link></span>
  </Footer>
);
