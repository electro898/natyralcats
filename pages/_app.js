import React from "react";
import App from "next/app";
import "../styles/styles.scss";

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
