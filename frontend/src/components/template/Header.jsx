import './Header.css';
import React from 'react';

export default props =>
  <header className="header d-none d-sm-flex flex-column"> {/*para celular header não aparede e usa display flex*/}
    <h1 className="mt3">
      <i className={`fa fa-${props.icon}`}></i> {props.title} {/*usando font awesome para colocar icone*/}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </header> 