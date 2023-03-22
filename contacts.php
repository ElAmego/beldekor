<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/index.css" />
  <link rel="stylesheet" href="style/contacts.css" />
  <title>Контакты</title>
</head>
<body>
  <div class="container">
    <div class="flexContainer">

      <header>
        <div class="header__container">
          <div class="header__flexContainer">
            <div class="header__logoInfo">
              <img src="img/logo.png" alt="sight_logo" title="logo" class="header__logo">
               <div class="header__info">

                <div class="header__info__card">
                  <img src="img/a1.png" alt="a1__logo" class="header__info__logo">
                  <p class="header__info__cardText">
                    (044) 77-676-87
                  </p>
                </div>
  
                <div class="header__info__card">
                  <img src="img/mts.png" alt="mts__logo" class="header__info__mtsLogo">
                  <p class="header__info__cardText">
                    (029) 767-68-69
                  </p>
                </div>
  
                <div class="header__info__card">
                  <img src="img/email.svg" alt="email__logo" class="header__info__logo">
                  <p class="header__info__cardText">
                    info@beldekor.by
                  </p>
                </div>

                <div class="header__info__card">
                  <img src="img/clock.svg" alt="clock__logo" class="header__info__logo">
                  <p class="header__info__cardText">
                    Пн – Пт: 9:00 – 19:00 <br>
                    Сб – Вс: 9:00 – 16:00
                  </p>
                </div>
              </div>

              <div class="burger">
                <span></span>
              </div>
            </div>

            <nav class="header__navigation">
              <a href="index.html">
                Главная
              </a>
  
              <a href="constructor.html">
                Конструктор
              </a>

              <a href="price.php">
                Цены
              </a>
  
              <a href="photogallery.html">
                Фотогалерея
              </a>
  
              <a href="review.php">
                Отзывы
              </a>
  
              <a href="discounts.html">
                Акции
              </a>
  
              <a href="faq.html">
                Вопросы
              </a>
  
              <a href="contacts.html" id="active">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div class="contacts__container">
          <div class="contacts__flexContainer">
            <h1 class="contacts__title">
              Наши контакты
            </h1>
            
            <div class="contacts__dataMap">
              <div class="contacts__data">

                <div class="contacts__data__phones">
                  <p class="contacts__data__phonesTitle">
                    Телефоны:
                  </p>

                  <p class="contacts__data__phoneA1">
                    (044) 77-676-87 (А1)
                  </p>

                  <p class="contacts__data__phoneMts">
                    (029) 767-68-69 (МТС)
                  </p>
                </div>

                <div class="contacts__data__email">
                  <p class="contacts__data__emailTitle">
                    Электронная почта:
                  </p>

                  <p class="contacts__data__emailAddress">
                    info@beldekor.by
                  </p>
                </div>

                <div class="contacts__data__address">
                  <p class="contacts__data__addressTitle">
                    Юридический адрес:
                  </p>

                  <p class="contacts__data__oficeAddress">
                    220125, г. Минск, ул. Уручская, 4-8
                  </p>
                </div>

                <div class="contacts__data__post">
                  <p class="contacts__data__postTitle">
                    Почтовый адрес:
                  </p>

                  <p class="contacts__data__postAddress">
                    220125, г. Минск, а/я 76 
                  </p>
                </div>

                <div class="contacts__data__requisites">
                  <p class="contacts__data__requisitesTitle">
                    Реквизиты:
                  </p>

                  <p class="contacts__data__requisitesNumber">
                    УНП: 192641154 <br>
                    р/с BY 49 SLAN 3013 3602 5000 0010 0000 <br>
                    в ЗАО Банк ВТБ (Беларусь), <br>
                    БИК SLANВY22 <br>
                    220007, г. Минск, ул. Московская, 14 
                  </p>
                </div>
                
                <div class="contacts__data__social">
                  <p class="contacts__data__socialTitle">
                    Социальные сети:
                  </p>

                  <div class="contacts__data__socialMedia">
                    <a href="https://vk.com/public125751331" class="contacts__data__socialMediaLink">
                      <img src="img/contacts/vk.png" alt="vk__logo" class="contacts__data__socialMediaImg">
                    </a>

                    <a href="https://www.facebook.com/beldekor.by/" class="contacts__data__socialMediaLink">
                      <img src="img/contacts/facebook.png" alt="facebook__logo" class="contacts__data__socialMediaImg">
                    </a>

                    <a href="https://ok.ru/group54617789825045" class="contacts__data__socialMediaLink">
                      <img src="img/contacts/odnoklassniki.png" alt="odnoklassniki__logo" class="contacts__data__socialMediaImg">
                    </a> 
                  </div>
                </div> 
              </div>
              
              <iframe class="map" style="border: 2px solid #EF6500;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.9450537423468!2d27.693500715610917!3d53.95048373698802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc949b7e22769%3A0x54fa7e27e91aad97!2z0YPQuy4g0KPRgNGD0YfRgdC60LDRjyA0LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1679410331635!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
              <form action="getData/question.php" class="feedback" method="post">
                <h2 class="feedback__title">
                  Есть вопрос?
                </h2>

                <p class="feedback__description">
                  Задайте вопрос и в течении часа мы обязательно вам ответим.
                </p>

                <input type="text" class="feedback__name" placeholder="Ваше имя" name="name"> <br>
                <span class="feedback__nameError">Поле должно содержать от 1 до 20 латинских букв</span>

                <input type="text" class="feedback__email" placeholder="Ваш Email" name="email"><br>
                <span class="feedback__emailError">Введен некорректный email</span>

                <textarea name="question" cols="30" rows="6" class="feedback__question" placeholder="Введите ваш вопрос здесь..."></textarea> <br>
                <span class="feedback__questionError">Поле не должно быть пустым</span>

                <button type="submit" class="feedback__btn">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="footer__container">
          <div class="footer__flexContainer">
            <div class="footer__info">
              <div class="footer__info__card">
                <img src="img/a1.png" alt="a1__logo" class="footer__info__logo">
                <p class="footer__info__cardText">
                  (044) 77-676-87
                </p>
              </div>

              <div class="footer__info__card">
                <img src="img/mts.png" alt="mts__logo" class="footer__info__mtsLogo">
                <p class="footer__info__cardText">
                  (029) 767-68-69
                </p>
              </div>

              <div class="footer__info__card">
                <img src="img/email.svg" alt="email__logo" class="footer__info__logo">
                <p class="footer__info__cardText">
                  info@beldekor.by
                </p>
              </div>

              <div class="footer__info__card">
                <img src="img/clock.svg" alt="clock__logo" class="footer__info__logo">
                <p class="footer__info__cardText">
                  Пн – Пт: 9:00 – 19:00 <br>
                  Сб – Вс: 9:00 – 16:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>

  <script src="scripts/burger.js"></script>
  <script src="scripts/feedback.js"></script>
</body>
</html>