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

export default Tpall;
