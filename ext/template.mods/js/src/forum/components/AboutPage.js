import DiscussionPage from "flarum/forum/components/DiscussionPage";

export default class AboutPage extends DiscussionPage {
  view() {
    return (
      <div>
        <header className="Hero DiscussionHero DiscussionHero--colored" style="--hero-bg:#ff7a7a;">
          <div className="container">
            <ul className="DiscussionHero-items">
              <li className="item-tags">
              <span className="TagsLabel">
                <h1 className="DiscussionHero-title">ProgUnity</h1>
              </span>
              </li>
            </ul>
          </div>
        </header>

        <div className="container">
          <div className="Post-body">
            <br/>
            <h3>Что такое ProgUnity?</h3>

            <p>ProgUnity - это блог и небольшое сообщество программистов.</p>

            <p>Зарегистрируйся и вступай в сообщество.</p>
          </div>
        </div>
      </div>
    );
  }
}
