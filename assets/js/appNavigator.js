'use strict';

class StickNavigator extends React.Component {
  state = {
    headers: [],
  };

  componentDidMount() {
    this.makeHeaders();

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  getHTags = elements => {
    const links = document.querySelectorAll('h1, h2, h3');
    const headers = [];
    links.forEach(link => {
      if (link.hasAttribute('id')) {
        elements ? headers.push(link) : headers.push(link.getAttribute('id'));
      }
    });

    return headers;
  };

  makeHeaders = () => {
    const headers = this.getHTags();

    this.setState(prevState => ({ headers }));
  };

  onScroll = e => {
    const headers = this.getHTags('elements');
    const ids = [];

    headers.forEach(header => {
      const rect = header.getBoundingClientRect();

      if (rect.top < 10) {
        ids.push(header.getAttribute('id'));
      }
    });

    const activeText = ids[ids.length - 1];

    this.ul.childNodes.forEach(li => {
      li.classList.remove('active');
      if (li.firstChild.text === activeText) {
        li.classList.add('active');
      }
    });
  };

  render() {
    const { headers } = this.state;

    return (
      <div className="stick-nav__wrapper">
        <ul ref={ul => (this.ul = ul)}>
          {headers.map((header, index) => (
            <li key={index} className="sticky-nav__wrapper list">
              <a href={`#${header}`}>{header}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const dom = document.querySelector('#app-navigator');
if (dom) {
  ReactDOM.render(<StickNavigator />, dom);
}
