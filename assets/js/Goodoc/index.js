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

export default Goodoc;
