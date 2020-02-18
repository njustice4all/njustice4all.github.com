'use strict';

import Default from './default.js';
import Goodoc from './goodoc/index.js';
import Aty from './aty/index.js';
import Tpall from './tpall/index.js';

class Wow extends React.Component {
  state = {
    view: 'default',
    isVisiblePop: false,
  };

  onChangeView = view => e => {
    setTimeout(() => {
      const [html] = document.getElementsByTagName('html');
      const [header] = document.getElementsByClassName('header-home');
      this.setState({ view });
      html.scrollTo(0, 0);
      header.classList.toggle('active');
    }, 100);
  };

  onClickBack = e => {
    setTimeout(() => {
      const [html] = document.getElementsByTagName('html');
      const [header] = document.getElementsByClassName('header-home');
      this.setState({ view: 'default' });
      header.classList.toggle('active');
      html.scrollTo(0, 0);
    }, 100);
  };

  renderView = () => {
    const { view } = this.state;
    switch (view) {
      case 'goodoc':
        return <Goodoc />;
      case 'aty':
        return <Aty />;
      case 'tpall':
        return <Tpall />;
      default:
        return null;
    }
  };

  render() {
    const { view, isVisiblePop } = this.state;

    return (
      <div>
        {view !== 'default' && (
          <header className="flex-center">
            <button className="btn-back" onClick={this.onClickBack}>
              돌아가기
            </button>
          </header>
        )}
        {view === 'default' ? (
          <div className="default-wrapper">
            <div className="item" onClick={this.onChangeView('goodoc')}>
              <h1>굿닥</h1>
              <img src="/assets/images/posts/200217/thumbnail_goodoc.png" />
            </div>
            <div className="item" onClick={this.onChangeView('aty')}>
              <h1>아티컴퍼니</h1>
              <img src="/assets/images/posts/200217/thumbnail_aty.png" />
            </div>
            <div className="item" onClick={this.onChangeView('tpall')}>
              <h1>티피올</h1>
              <img src="/assets/images/posts/200217/thumbnail_tpall.png" />
            </div>
          </div>
        ) : (
          this.renderView()
        )}
      </div>
    );
  }
}

const dom = document.querySelector('#projects');
if (dom) {
  ReactDOM.render(<Wow />, dom);
}
