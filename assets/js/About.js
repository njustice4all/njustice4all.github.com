'use strict';

const FRONTEND = 'FRONTEND?';

class About extends React.Component {
  render() {
    return (
      <div className="about-title">
        {FRONTEND.split('').map((str, idx) => (
          <span className={`string-rotate str-${Math.floor(Math.random() * 9) + 1}`} key={idx}>
            {str}
          </span>
        ))}
      </div>
    );
  }
}

const dom = document.querySelector('#about-container');
if (dom) {
  ReactDOM.render(<About />, dom);
}
