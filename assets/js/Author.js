'use strict';

class Author extends React.Component {
  state = {
    strings: ['I', ' ', 'W', 'A', 'N', 'T', ' ', 'T', 'O', ' ', 'B', 'E', 'L', 'I', 'E', 'V', 'E'],
    stack: [],
    index: 0,
    indicator: true,
    direction: 'forward',
  };

  componentDidMount() {
    this.stringInterval = window.setInterval(this.pushStringToStack, 600);
    this.flashInterval = window.setInterval(this.flashIndicator, 250);
  }

  componentWillUnmount() {
    window.clearInterval(this.stringInterval);
    window.clearInterval(this.flashInterval);
  }

  pushStringToStack = () => {
    const { strings, index, direction } = this.state;

    if (index === 0) {
      this.setState(prevState => ({ direction: 'forward' }));
    }

    if (index === strings.length) {
      this.setState(prevState => ({ index: 0, stack: [] }));
      return;
      // this.setState(prevState => ({ direction: 'backward' }));
    }

    this.setState(prevState => ({
      stack: [...prevState.stack, strings[index]],
      index: direction === 'forward' ? index + 1 : index - 1,
    }));
  };

  flashIndicator = () => {
    this.setState(prevState => ({ indicator: !prevState.indicator }));
  };

  render() {
    const { stack, indicator } = this.state;
    const renderString = stack.join('');
    const indicatorID = indicator && 'indicator';

    return (
      <div className="string-stack">
        <section className="author">
          <div className="toleft">
            <img className="selfie" src="../assets/images/profile.jpeg" />
          </div>
          <div className="toright">
            <h4 className="name">AngelKing47</h4>
            <div style={{ height: '24px' }}>
              <h3>{renderString}</h3>
              <span id={indicatorID} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const dom = document.querySelector('#author-container');
if (dom) {
  ReactDOM.render(<Author />, dom);
}
