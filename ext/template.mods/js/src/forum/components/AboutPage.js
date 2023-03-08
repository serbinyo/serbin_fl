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

            <p>
              ProgUnity.ru является сообществом программистов и онлайн-платформой для обучения программированию.
              Мы хотим предоставить возможности получить бесплатное образование в области IT и дать возможности
              программистам улучшать навыки делясь своим опытом.
            </p>

            <h3>Наша миссия</h3>
            <p>Миссия ProgUnity состоит в бесплатном образовании всех желающих обучиться программированию через создание
              сообщества программистов, готовое поддерживать друг друга, обмениваясь знаниями и опытом.
              Платные услуги должны оказываться как дополнительные услуги в виде менторства, индивидуальных учебных
              планов
              и удовлетворения индивидуальных запросов учащихся.
              Все ученые материалы должны быть в общем доступе для возможности самостоятельного бесплатного
              обучения.</p>

            <blockquote className="uncited">
              <div>
                <p>
                  <em>
                    Мы расцениваем нашу миссию как важную и ценную в современном мире, где профессиональные навыки в
                    области
                    программирования являются все более востребованными. Бесплатное образование и создание сообщества
                    программистов помогают сделать обучение доступным для широкой аудитории, включая тех, кто может не
                    иметь
                    финансовых возможностей для оплаты платных курсов. Кроме того, такое сообщество может стать ценным
                    источником знаний и поддержки для всех, кто хочет развиваться в области программирования и находить
                    единомышленников.
                  </em>
                  <em>
                    <strong>Александр Сербин</strong>. Основатель Progunity.
                  </em>
                </p>
              </div>
            </blockquote>


            <h3>Наши цели</h3>
            <ol style="list-style-type:decimal">
              <li>Предоставление возможности обучения программированию для всех желающих.</li>
              <li>Создание и развитие активного сообщества программистов, обменивающегося опытом и знаниями.</li>
              <li>Улучшение доступности обучения для всех пользователей, в том числе для людей из малообеспеченных семей
                и
                разных регионов.
              </li>
              <li>Содействие в развитии детей и подростков.</li>
              <li>Поддержание высоких стандартов профессионализма и этики в программировании.</li>
              <li>Улучшение и развитие методов обучения.</li>
              <li>Развитие и улучшение платформы для обучения и общения.</li>
              <li>Расширение сферы влияния и привлечение новых пользователей и партнеров.</li>
              <li>Улучшение качества контента и обучения для обеспечения лучшего опыта для пользователей.</li>
              <li>Развитие индивидуального подхода к обучению и поддержка каждого ученика в их личном и профессиональном
                росте
              </li>
            </ol>

            <h3>Наши ценности</h3>
            <ol style="list-style-type:decimal">
              <li><strong>Образование и развитие.</strong> Мы ценим образование и развитие членов сообщества, стремясь
                предоставлять высококачественное обучение и инструменты для развития навыков.
              </li>
              <li><strong>Сообщество и поддержка.</strong> Мы нацелены на создание сообщества, которое поддерживает и
                обучает, обмениваясь знаниями и опытом.
              </li>
              <li><strong>Взаимное уважение и этика.</strong> Мы ценим уважение и этику в своей работе, стремясь к
                высоким
                стандартам качества снобизма и цинизма.
              </li>
              <li><strong>Равенство и разнообразие.</strong> Мы ценим равенство и разнообразие, создавая безопасную и
                поддерживающую среду для учеников разных культур, полов и рас.
              </li>
              <li><strong>Социальная ответственность.</strong> Мы стремимся внести свой вклад в развитие IT-индустрии и
                образования в целом, помогая людям получать качественное образование и развиваться в сфере IT
              </li>
              <li><strong>Доступность обучения.</strong> Мы стремимся к доступности обучения для каждого, публикуя все
                наши
                материалы и статьи в открытом доступе.
              </li>
              <li><strong>Постоянное улучшение и развитие.</strong> Мы стремимся к постоянному улучшению и развитию как
                платформы, так и методов обучения. Следим за тенденциями в IT-индустрии и интегрируем новые технологии.
              </li>
              <li><strong>Открытость.</strong> Мы поддерживаем открытый и доверительный диалог с членами сообщества и
                партнерами, готовы выслушать и учитывать их мнения и пожелания.
              </li>
              <li><strong>Стремление к лидерству.</strong> Мы стремимся стать лидером в сфере онлайн-обучения
                программированию, предлагая членам сообщества лучшие условия для обучения и развития.
              </li>
            </ol>


            <h3>Философия сообщества</h3>
            <ol style="list-style-type:decimal">
              <li>В сообществе мы ценим уважительное отношение друг к другу, и не поддерживаем негативные проявления,
                такие
                как снобизм и цинизм. Мы также поощряем активное обучение и не поддерживаем лень.
              </li>
              <li>Если кто-то заинтересован в обучении, мы всегда готовы помочь и ответить на вопросы.</li>
              <li>В наше время существует множество различных технологий и подходов, которые могут запутать. Мы создали
                сообщество, чтобы помочь друг другу овладеть нужными знаниями.
              </li>
              <li>Наша цель не отправить участника к чтению документации, потому что мы понимаем, к этому нужно
                подготовить.
              </li>
              <li>У нас нет мании величия и мы не самозванцы, мы всегда готовы учиться и совершенствоваться.</li>
              <li>Мы не отказываемся от своих целей.</li>
              <li>В сообществе мы считаем, что ошибки - это возможность для роста и улучшения.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}