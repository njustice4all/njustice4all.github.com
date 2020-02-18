'use strict';

class Goodoc extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="section">
          <h1 className="content-title">굿닥 v3 접수예약 관리시스템</h1>
          <ul className="content-description">
            <li>타임테이블의 시각화를 통해 접수예약을 관리</li>
            <li>로직은 프론트에서 구현하고 api를 통해 데이터만 주고받음</li>
            <li>typescript / react / redux</li>
          </ul>
          <div>
            <h4>스케쥴 직접 입력</h4>
            <video width="100%" controls>
              <source
                src="/assets/images/posts/200217/schedule_direct-input.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div>
            <h4>스케쥴 대량 입력</h4>
            <video width="100%" controls>
              <source src="/assets/images/posts/200217/schedule_bulk-input.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <h4>스케쥴 대량 삭제</h4>
            <video width="100%" controls>
              <source src="/assets/images/posts/200217/schedule_bulk-delete.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <h4>스케쥴 월복사</h4>
            <video width="100%" controls>
              <source src="/assets/images/posts/200217/schedule_copy.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <h4>접수 직접 입력</h4>
            <video width="100%" controls>
              <source src="/assets/images/posts/200217/local_direct-input.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="section">
          <h1 className="content-title">굿닥 운영 어드민 배너 업로드 자동화</h1>
          <ul className="content-description">
            <li>
              운영팀이 담당하며 요청한 이벤트 이미지 및 배너를 s3에 예약시간에 맞춰 업로드 자동화
            </li>
            <li>node / express / typescript</li>
          </ul>
        </div>

        <div className="section">
          <h1 className="content-title">굿닥 접수 알림톡 마이그레이션및 운영</h1>
          <ul className="content-description">
            <li>병원접수 -> 카카오톡 알림톡 -> 모바일화면</li>
            <li>treasureData, GoogleAnalytics추가 / angular -> react / typescript / redux-saga</li>
          </ul>
          <div className="flex-center">
            <img src="/assets/images/posts/200217/goodoc-alarm-talk.png" />
          </div>
        </div>
      </div>
    );
  }
}

class Aty extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="section">
          <h1 className="content-title">ATY Editor 컴포넌트 개발</h1>
          <ul className="content-description">
            <li>한국형 wix + 쇼핑몰 기능 추가 및 버그수정</li>
            <li>
              검색 개체, 이미지 슬라이더, 통계페이지, 드래그앤드롭 3 뎁스 메뉴, 카카오톡 플러스 친구
              추가, 야놀자 예약 달력등
            </li>
            <li>react.js</li>
          </ul>
          <div className="flex-center">
            <img src="/assets/images/posts/200217/aty/3.png" />
          </div>
          <div className="flex" style={{ marginTop: '30px' }}>
            <div className="flex-center">
              <img src="/assets/images/posts/200217/aty/1.png" />
            </div>
            <div className="flex-center" style={{ marginLeft: '20px' }}>
              <img src="/assets/images/posts/200217/aty/5.png" />
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="content-title">단골사장님</h1>
          <ul className="content-description">
            <li>배달,매장,포장 주문등을 푸시메세지로 관리</li>
            <li>react-native</li>
          </ul>
          <div className="flex-center" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <a
              href="https://itunes.apple.com/us/app/%EB%8B%A8%EA%B3%A8%EC%82%AC%EC%9E%A5%EB%8B%98/id1358583165?l=ko&amp;ls=1&amp;mt=8"
              rel="nofollow"
            >
              iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=kr.aty.bossapp&amp;hl=ko"
              rel="nofollow"
            >
              android
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Tpall extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="section">
          <h1 className="content-title">signet-air 어드민</h1>
          <ul className="content-description">
            <li>
              IFE(Inflight Entertainment)제품의 관리자 웹앱 (면세품및 기내식 주문, 비디오 스트리밍,
              항공정보 등)
            </li>
            <li>React + React-Redux + JWT + videojs</li>
            <li>infinite slider carousel 제작</li>
            <li>사용자와 승무원 페이지의 디자인</li>
          </ul>
          <div className="flex">
            <div className="flex-center">
              <img src="/assets/images/posts/200217/signet.png" />
            </div>
            <div className="flex-center">
              <img src="/assets/images/posts/200217/thumbnail_tpall.png" />
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="content-title">Calvary Christian Scholars 국제외국인학교 홈페이지</h1>
          <ul className="content-description">
            <li>강남 국제 외국인 학교 홈페이지 프론트엔드 개발</li>
            <li>React / React-Redux / wordpress rest api / bootstrap grid system</li>
            <li>구글 캘린더 api 사용 및 carousel 제작</li>
            <li>게시판 paging 처리 알고리즘 구현및 모바일페이지 디자인</li>
          </ul>
          <div className="flex-center">
            <img src="/assets/images/posts/200217/ccs/ccs.png" />
          </div>
        </div>
        <div className="section">
          <h1 className="content-title">아트로힐링</h1>
          <ul className="content-description">
            <li>그림으로 심리치료를 하기위한 그림판 어플리케이션</li>
            <li>Electron / React.js / React-Redux</li>
          </ul>
          <div className="flex-center">
            <img src="/assets/images/posts/200217/artro-healing/1.png" />
          </div>
          <div className="flex">
            <div>
              <img src="/assets/images/posts/200217/artro-healing/2.png" />
            </div>
            <div>
              <img src="/assets/images/posts/200217/artro-healing/3.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
