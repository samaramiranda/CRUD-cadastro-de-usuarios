import './Main.css';
import React from 'react';
import Header from './Header';

export default props =>
  <> 
    <Header {...props}></Header> {/*as propriedades que recebo no main vão para header*/}
      <main className="content container-fluid"> {/*container é classe do bootstrap*/} 
        <div className="p-3 mt-3"> {/*padding e margin top*/}
          {props.children}
        </div>
      </main>
  </> 