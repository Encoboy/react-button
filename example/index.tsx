import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Buttons } from '../.';
import '../dist/react-buttons.min.css';

const App = () => {
  return (
    <div>
      <Buttons>按钮</Buttons>
      <br />
      <br />
      <Buttons type="primary">默认</Buttons>
      <br />
      <br />
      <Buttons type="danger">危险</Buttons>
      <br />
      <br />
      <Buttons type="success">成功</Buttons>
      <br />
      <br />
      <Buttons type="warning">警告</Buttons>
      <br />
      <br />
      <Buttons type="primary" outline={true}>
        outline:true
      </Buttons>
      <br />
      <br />
      <Buttons type="primary" size="small">
        small
      </Buttons>
      <br />
      <br />
      <Buttons type="primary" size="large">
        large
      </Buttons>
      <br />
      <br />
      <Buttons
        type="primary"
        block={true}
        onClick={() => {
          console.log('8888');
        }}
      >
        block:true
      </Buttons>
      <span>333</span>
      <br />
      <br />
      <Buttons
        type="primary"
        disabled={true}
        onClick={() => {
          console.log('9999');
        }}
      >
        disabled:true
      </Buttons>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
