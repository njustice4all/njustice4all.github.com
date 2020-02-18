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

export default Aty;
