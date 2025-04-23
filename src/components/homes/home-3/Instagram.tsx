
const Instagram = () => {
  return (
    <div className="container">
  <section className="top-bar">
    <button className="top-bar__back-btn"><i className="material-icons">arrow_back_ios</i></button>
    <div className="top-bar__title">        
      <h1 className="top-bar__title__text">instagram</h1>
      <img className='top-bar__title__verified-icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/kisspng-social-media-instagram-verified-badge-symbol-compu-5b1eedb5aba638.1612204615287535897031.jpg" alt="verified-icon"/></div>
    <button className="top-bar__menu-btn"><i className="material-icons">more_horiz</i></button>
  </section>
  <section className="stats">
    <div className="stats__img-holder" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/instagram-logo.png');"}}>      
    </div>
    <div className="stats__data">
      <div className="stats__data__point">
        <div className="stats__data__point__value">6,126</div>
        <div className="stats__data__point__description">Posts</div>
      </div>
      <div className="stats__data__point">
        <div className="stats__data__point__value">317 M</div>
        <div className="stats__data__point__description">Followers</div>
      </div>
      <div className="stats__data__point">
        <div className="stats__data__point__value">225</div>
        <div className="stats__data__point__description">Following</div>
      </div>
    </div>      
  </section>
  <section className="description">
    <h2 className="decription__title">Instagram</h2>
    <p>
      Bringing you closer to the people and things you love. ❤️
    </p>
    <a href="https://www.antibullyingpro.com/resources">www.antibullyingpro.com/resources</a>
  </section>
  <section className="actions">
    <button className="actions__btn actions__btn--active">Follow</button>
    <button className="actions__btn">Message</button>
    <button className="actions__btn actions__btn--icon"><i className="material-icons">keyboard_arrow_down</i></button>
  </section>
  <section className="stories">
    <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60')"}}></div>
      </div>
      <p className="stories__single__description">Game On</p>
    </div>
    <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">Take a Stand</p>
    </div>
    <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">You got this</p>
    </div>
        <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">#skater girl</p>
    </div>
      <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">Game On</p>
    </div>
    <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">Take a Stand</p>
    </div>
    <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">You got this</p>
    </div>
        <div className="stories__single">
      <div className="stories__single__img-holder">
        <div className="stories__single__img-holder__inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518144591331-17a5dd71c477?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></div>
      </div>
      <p className="stories__single__description">#skater girl</p>
    </div>
  </section>
  <section className="tabs">
    <button className="tabs__btn tabs__btn--active">
      <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon"/>
    </button>
    <button className="tabs__btn">
      <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/igtv-icon.png" alt="igtv icon"/>
    </button>
    <button className="tabs__btn">
      <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/smile-icon.png" alt="smile icon"/>
    </button>
    <button className="tabs__btn">
      <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/tagged-icon.png" alt="tagged icon"/>
    </button>
  </section>
  <section className="grid">
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    <a href="" className="grid__photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}></a>
    
  </section>
  <section className="bottom-bar">
    <button className="bottom-bar__btn">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/home-icon.png" className="bottom-bar__btn__icon" alt="home icon"/>
    </button>
    <button className="bottom-bar__btn bottom-bar__btn--active">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/search-icon.png" className="bottom-bar__btn__icon" alt="search icon"/>
    </button>
    <button className="bottom-bar__btn">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/add-icon.png" className="bottom-bar__btn__icon" alt="add icon"/>
    </button>
    <button className="bottom-bar__btn">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/heart-icon.png" className="bottom-bar__btn__icon" alt="heart icon"/>
    </button>
    <button className="bottom-bar__btn">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/profile-picture.png" className="bottom-bar__btn__icon" alt="profile picture"/>
    </button>
  </section>
</div>

  );
};

export default Instagram;
