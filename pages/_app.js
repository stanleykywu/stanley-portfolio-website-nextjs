import './index.css'
import Layout from './components/layout.jsx'
import App from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}