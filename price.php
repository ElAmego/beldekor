<?php
  require_once 'getData/getEkranData.php';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel='stylesheet' href='style/index.css' />
  <link rel='stylesheet' href='style/price.css' />
  <title>Цены</title>
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

              <a href="#" id="active">
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
  
              <a href="contacts.php">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div class="price__container">
          <div class="price__flexContainer">
            <h1 class="price__title">
              Наши цены
            </h1>
 
            <p class="price__description">
              Цена договорная и зависит от размера изделия и выбранного материала
            </p>

            <div class='price__list'>
              <div class='price__item'>
                <img src="img/price/classic.jpg" alt="classic__photo" class="price__itemPhoto">

                <p class="price__itemTitle">
                  Серия "Классик"
                </p>
              </div>

              <div class='price__item'>
                <img src="img/price/elit.jpg" alt="elit__photo" class="price__itemPhoto">

                <p class="price__itemTitle">
                  Серия "Элит"
                </p>
              </div>

              <div class='price__item'>
                <img src="img/price/glynec.jpg" alt="glynec__photo" class="price__itemPhoto">

                <p class="price__itemTitle">
                  Серия "Глянец"
                </p>
              </div>

              <div class='price__item'>
                <img src="img/price/rotang.jpg" alt="rotang__photo" class="price__itemPhoto">

                <p class="price__itemTitle">
                  Серия "Ротанг"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="finished__container">
          <div class="finished__flexContainer">
            <h2 class="finished__title">
              Готовая продукция
            </h2>

            <div class="finished__list">
              <?php
                foreach ($products as $product) {
              ?>
              <div class="finished__item">
                <p class="finished__item__title"><?= $product[0] ?>, <?= $product[2] ?>/<?= $product[4] ?></p>

                <img src="<?= $product[10] ?>" alt="finished__photo" class="finished__item__photo">

                <p class="finished__item__size">Серия: <span class="bold"><?= $product[1] ?></span> </p>
                <p class="finished__item__perforationType">Тип перфорации: <span class="bold"><?= $product[3] ?></span> </p>
                <p class="finished__item__size">Размер: <span class="bold"><?= $product[5] ?>x<?= $product[6] ?>x<?= $product[7] ?></span> </p>
                <p class="finished__item__kolvo">Кол-во на складе: <span class="bold"><?= $product[8] ?></span></p>
                <p class="finished__item__price">Цена: <span class="bold"><?= $product[9] ?>р.</span></p>
              </div>
              <?php
                };
              ?>
            </div>
          </div>
        </div>

        <div class="advantages__container">
          <div class="advantages__flexContainer">
            <div class="advantages__description">
              Вот и позади долгий ремонт… Но чего-то всё же не хватает… А давайте закроем Ваш радиатор декоративным экраном. И Ваш интерьер будет 
              завершенным. Декоративные экраны, изготовленные нашей фирмой ограждают и закрывают батареи в домах, кабинетах, квартирах, офисах и 
              коттеджах. За все время существования отопительных систем создано много разновидностей батарей отопления: от чугунных до более 
              современных, которые устанавливаются в элитных домах и квартирах. Радиаторные рамки и экраны коробом прекрасно вписываются в интерьер, 
              приумножая его красоту, индивидуальность и особый колорит. Производимые нами рамки и экраны могут быть установлены на различные виды 
              радиаторов. Экраны для радиаторов, изготовленные на нашем производстве, нетоксичны, безопасны, не деформируются и имеют продолжительный 
              срок эксплуатации.
            </div>

            <div class="advantages">
              <p class="advantages__title">
                Преимущества заказа декоративных экранов на beldekor.by:
              </p>

              <ul class="advantages__list">
                <li class='advantages__item'>
                  <span class="color__black">
                    надежная защита травмоопасных металлических радиаторов;
                  </span>
                </li>

                <li class='advantages__item'>
                  <span class="color__black">
                    экраны способны обеспечить максимальное распространение тёплых потоков воздуха в помещении;
                  </span>
                </li>

                <li class='advantages__item'>
                  <span class="color__black">
                    придают интерьеру законченный эстетический вид;
                  </span>
                </li>

                <li class='advantages__item'>
                  <span class="color__black">
                    эти экраны – гарантия качества;
                  </span>
                </li>

                <li class='advantages__item'>
                  <span class="color__black">
                    экономное расходование денежных средств.
                  </span>
                </li>
              </ul>
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
</body>
</html>