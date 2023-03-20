<?php
  require_once 'getData/getReviews.php';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel='stylesheet' href='style/index.css' />
  <link rel='stylesheet' href='style/review.css' />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <title>Отзывы</title>
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
  
              <a href="#" id="active">
                Отзывы
              </a>
  
              <a href="discounts.html">
                Акции
              </a>
  
              <a href="faq.html">
                Вопросы
              </a>
  
              <a href="contacts.html">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div class="addReview__container">
          <div class="addReview__flexContainer">
            <h1 class="addReview__title">
              Отзывы покупателей
            </h1>

            <div class="addReview">
              <div class="addReview__description">
                Хотите оставить свой отзыв? <br>
                Поделитесь своими впечатлениями!
              </div>

              <button class="addReview__btn">
                Оставить отзыв
              </button>
            </div>

            <div class="addReview__line"></div>
          </div>
        </div>
        
        <div class="allReviews__container">
          <div class="allReviews__flexContainer">
            <?php
              foreach($reviews as $review) {
            ?>
            <div class="allReviews__item">
              <div class="allReviews__nameStars">
                <div class="allReviews__name">
                <?= $review[1] ?>
                </div>

                <div class="allReviews__stars">
                  <?php
                    for ($i = 1; $i <= $review[2]; $i++) {
                  ?>
                  <span class="material-icons yellow">star</span>
                  <?php
                    };
                  ?>
                </div>
              </div>

              <div class="allReviews__review"><?= $review[3] ?></div>
            </div>
            <?php
              };
            ?>
          </div>
        </div>
      </main>

      <div class="output">
        <form class="addReview__form" action="getData/create.php" method="post">
          <h2 class="addReview__formTitle">
            Оставить отзыв
          </h2>
          <label class="addReview__form__labelName">
            Ваше имя: <br>
            <input type="text" id="addReview__form__name" name="name"> <br>
            <span class="errorName">Поле не должно быть пустым или содержать более 20 символов</span>
          </label>

          <label class="addReview__form__labelStars">
            Выберите рейтинг: <br>
            <input type="number" class="stars" name="rating">
            <span class="material-icons md-light ratingStar">star</span><span class="material-icons md-light ratingStar">star</span><span class="material-icons md-light ratingStar">star</span><span class="material-icons md-light ratingStar">star</span><span class="material-icons md-light ratingStar">star</span>
            <br>
            <span class="errorStars">Выберите рейтинг</span>
          </label>

          <label class="addReview__form__labelReview">
            Ваш отзыв: <br>
            <textarea name="review" id="addReview__form__review" cols="48" rows="5"></textarea> <br>
            <span class="errorReview">Поле не должно быть пустым</span>
          </label>

          <div class="addReview__form__btns">
            <button type="submit" class="addReview__form__sbmAdd">
              Отправить
            </button>

            <div class ="addReview__form__sbmCancel">
              Отменить
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script src="scripts/form.js"></script> 
</body>
</html>