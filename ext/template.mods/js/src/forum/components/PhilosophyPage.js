import Page from 'flarum/common/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';

export default class PhilosophyPage extends Page {
  view() {
    return (
      <div className="TagsPage">
        <div className="container">
          <div className="philosophy-body">
            <blockquote className="uncited">
              <h1 className="h1">Философия ProgUnity</h1>
              <ul className="philosophy-list">

                <li><p><strong>1</strong>: Тут нет места снобизму и цинизму. Также мы не поощряем лень. </p></li>

                <li><p><strong>2</strong>: Если ты готов учиться, то спрашивай. </p></li>

                <li><p><strong>3</strong>: В обилии парадигм технологий, подходов можно запутаться и заблудиться, но мы
                  собираемся, что бы помогать друг другу овладеть нужным.</p></li>

                <li><p><strong>4</strong>: Мы не отправляем читать документацию, потому что понимаем, к этому нужно
                  подготовить. </p></li>

                <li><p><strong>5</strong>: У нас нет мании величия и мы не самозванцы, мы готовы учиться.</p></li>

                <li><p><strong>6</strong>: Мы не боимся ошибиться и упасть, мы боимся забросить.</p></li>

                <li><p><strong>7</strong>: Мы растем на наших ошибках.</p></li>
              </ul>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}
