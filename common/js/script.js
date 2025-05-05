// const cardSwiper = new Swiper(".card__swiper", {
//   //swiperの名前
//   //切り替えのモーション
//   speed: 1000, //表示切り替えのスピード
//   effect: "slide", //切り替えのmotion (※1)
//   allowTouchMove: true, // スワイプで表示の切り替えを有効に

//   //最後→最初に戻るループ再生を有効に
//   loop: true,
//   //自動スライドについて
//   autoplay: {
//     delay: 3000, //何秒ごとにスライドを動かすか
//   },

//   //表示について
//   centeredSlides: false, //中央寄せにする
//   slidesPerView: "auto",
//   spaceBetween: 30,

//   //ページネーション
//   pagination: {
//     el: ".swiper-pagination", //paginationのclass
//     clickable: true, //クリックでの切り替えを有効に
//     type: "bullets", //paginationのタイプ (※2)
//   },
//   //ナビゲーション
//   navigation: {
//     prevEl: ".swiper-button-prev", //戻るボタンのclass
//     nextEl: ".swiper-button-next", //進むボタンのclass
//   },
// });

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".marquee-wrapper");
  const content = document.querySelector(".marquee-content");

  // コンテンツの実際の幅を取得して、アニメーションを調整
  function adjustAnimation() {
    const contentWidth = content.offsetWidth;
    const animationDuration = (contentWidth / 100) * 2; // 速度調整用の係数

    wrapper.style.animationDuration = `${animationDuration}s`;

    // アニメーションをリセット
    wrapper.style.animation = "none";
    wrapper.offsetHeight; // リフロー
    wrapper.style.animation = `scroll ${animationDuration}s linear infinite`;
  }

  // 初期調整
  adjustAnimation();

  // ウィンドウサイズが変更された時に再調整
  window.addEventListener("resize", adjustAnimation);

  // マウスホバー時の一時停止（オプション）
  wrapper.addEventListener("mouseenter", () => {
    wrapper.style.animationPlayState = "paused";
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.style.animationPlayState = "running";
  });
});

//ドロワーボタン動き
document.querySelector("#js-drawer-button").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#js-drawer-button").classList.toggle("is-checked");
  document.querySelector("#js-drawer-content").classList.toggle("is-checked");
});

//worksセクションのスライダー
document.addEventListener("DOMContentLoaded", function () {
  const worksSwiper = new Swiper(".works__swiper", {
    //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に

    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    // autoplay: {
    //   delay: 3000, //何秒ごとにスライドを動かすか
    //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    //   disableOnInteraction: true, //ユーザーの操作時に止める
    //   reverseDirection: false, //自動再生を逆向きにする
    // },

    //表示について
    centeredSlides: true, //中央寄せにする
    slidesPerView: "auto",
    spaceBetween: 30,

    //ページネーション
    pagination: {
      el: ".works__swiper-pagination", //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: "bullets", //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: ".works__swiper-button-prev", //戻るボタンのclass
      nextEl: ".works__swiper-button-next", //進むボタンのclass
    },

    //ブレイクポイントによって変える
    breakpoints: {
      375: {
        slidesPerView: 1.0,
        spaceBetween: 15,
        centeredSlides: true, //中央寄せにする
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true, //中央寄せにする
      },
      1200: {
        slidesPerView: 3.6,
        spaceBetween: 40,
        centeredSlides: true, //中央寄せにする
      },
    },
  });
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
    crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
  crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

// serviceセクションのタブボタンの要素を全て取得
const tabButtons = document.querySelectorAll(".tab-button");

// タブボタンにクリックイベントを追加
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 全てのタブボタンとタブコンテンツから'active'クラスを削除
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));

    // クリックされたタブボタンに'active'クラスを追加
    button.classList.add("active");

    // 対応するタブコンテンツに'active'クラスを追加
    const tabId = button.getAttribute("data-tab");
    document.getElementById(`tab${tabId}`).classList.add("active");
  });
});

//checkValidityの実行
jQuery("#js-contact-button").on("click", function () {
  var name = jQuery("#your-name")[0];
  var email = jQuery("#your-email")[0];
  var select = jQuery("#your-select")[0];
  var privacy = jQuery("#your-privacy")[0];

  jQuery("#your-name").removeClass("invalid");
  jQuery("#your-email").removeClass("invalid");
  jQuery("#your-select").removeClass("invalid");
  jQuery("#your-privacy").removeClass("invalid");

  if (name.checkValidity() && email.checkValidity() && select.checkValidity() && privacy.checked) {
    alert("Form is valid!");
  } else {
    if (!name.checkValidity()) {
      jQuery("#your-name").addClass("invalid");
      alert("Invalid name");
    }
    if (!email.checkValidity()) {
      jQuery("#your-email").addClass("invalid");
      alert("Invalid email");
    }
    if (!select.checkValidity()) {
      jQuery("#your-select").addClass("invalid");
      alert("Invalid select");
    }
    if (!privacy.checked) {
      jQuery("#your-privacy").addClass("invalid");
      alert("Invalid privacy");
    }
  }
});

//各セクションのタイトルがスクロールで見えたら、◆が回転する
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.1 }
);

// すべてのセクションタイトルを監視
const sectionTitles = document.querySelectorAll(".section-title__contents");
sectionTitles.forEach((title) => observer.observe(title));

//tab-buttonで切り替わった画面の色を一瞬暗くする
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // 全てのボタンとタブからactiveクラスを削除
    document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));

    // クリックされたボタンにactiveクラスを追加
    button.classList.add("active");

    // フラッシュエフェクトを適用
    document.querySelectorAll(".price-card").forEach((card) => {
      // 既存のアニメーションが進行中の場合はリセット
      card.classList.remove("flash");

      // 強制的にリフロー（再描画）を発生させる
      void card.offsetWidth;

      // フラッシュエフェクトを追加
      card.classList.add("flash");
    });
  });
});

//serviceセクションの一文字ずつ表示
//ページが完全に読み込まれた後に実行される
window.addEventListener("load", function () {
  //GSAPライブラリのScrollTriggerプラグインを登録。スクロールに連動したアニメーションが可能
  gsap.registerPlugin(ScrollTrigger);
  //animated__slideUpクラスを持つ要素を全て取得
  const slideUpText = document.querySelectorAll(".animated__slideUp");
  //SplitTypeライブラリを使用して、テキストを1文字ずつに分割
  new SplitType(slideUpText);
  //各テキストに対してスクロールトリガーを設定
  slideUpText.forEach((item) => {
    ScrollTrigger.create({
      //各テキストをトリガーのポイントに設定
      trigger: item,
      //要素の上端がビューポートの下から80%の位置にきたらトリガー
      start: "top 80%",
      //トリガーポイントに入ったときに実行される関数
      onEnter: () => {
        //分割された各テキスト.charを取得
        const chars = item.querySelectorAll(".char");
        gsap.to(chars, {
          //初期位置はcssで画面外に設定しておき、y:0で表示させる
          y: 0,
          //各テキストを0.04秒ずつ遅延させて順番に表示
          stagger: 0.04,
        });
      },
    });
  });

  // サービスアイテムのスライドインアニメーション - 画面外から表示
  const serviceItems = document.querySelectorAll(".service__item");
  serviceItems.forEach((item, index) => {
    //インデックス1、つまり2番目の要素は左から右へ、それ以外は右から左へ
    const startX = index % 2 === 1 ? -150 : 150; // より大きな値に設定

    // 初期状態を設定（画面読み込み時に非表示にする）
    gsap.set(item, {
      //X軸方向に初期位置を設定(画面外)
      x: startX,
      opacity: 0,
      // 初期状態で非表示に
      visibility: "hidden",
    });

    ScrollTrigger.create({
      //各テキストをトリガーのポイントに設定
      trigger: item,
      //画面下から85%の位置でスタート
      start: "top 85%",
      onEnter: () => {
        // 要素を表示状態に設定してからアニメーション
        gsap.set(item, { visibility: "visible" });
        gsap.to(item, {
          //本来の位置に表示
          x: 0,
          opacity: 1,
          //アニメーションを0.7秒かけて実行
          duration: 0.7,
          //最初が速く、徐々にゆっくりというイメージ
          ease: "power3.out",
        });
      },
      //一度だけ実行
      once: true,
    });
  });
});

//headerが一番上にきたら固定表示
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY >= 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
