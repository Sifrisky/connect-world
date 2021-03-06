const navOpen = document.querySelector(".nav__hamburger"),
  navClose = document.querySelector(".close__toggle"),
  menu = document.querySelector(".nav__menu"),
  scrollLink = document.querySelectorAll(".scroll-link"),
  navContainer = document.querySelector(".nav__menu");
navOpen.addEventListener("click", () => {
  menu.classList.add("open"),
    document.body.classList.add("active"),
    (navContainer.style.left = "0"),
    (navContainer.style.width = "30rem");
}),
  navClose.addEventListener("click", () => {
    menu.classList.remove("open"),
      document.body.classList.remove("active"),
      (navContainer.style.left = "-30rem"),
      (navContainer.style.width = "0");
  });
const popup = document.querySelector(".popup"),
  closePopup = document.querySelector(".popup__close");
popup &&
  (closePopup.addEventListener("click", () => {
    popup.classList.add("hide__popup");
  }),
  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  }));
const navBar = document.querySelector(".navigation"),
  gotoTop = document.querySelector(".goto-top");
Array.from(scrollLink).map((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.currentTarget.getAttribute("href").slice(1),
      n = document.getElementById(t),
      i = navBar.getBoundingClientRect().height,
      o = navBar.classList.contains("fix__nav");
    let s = n.offsetTop - i;
    o || (s -= i),
      window.scrollTo({ left: 0, top: s }),
      (navContainer.style.left = "-30rem"),
      document.body.classList.remove("active");
  });
}),
  window.addEventListener("scroll", (e) => {
    const t = window.pageYOffset;
    t > navBar.getBoundingClientRect().height
      ? navBar.classList.add("fix__nav")
      : navBar.classList.remove("fix__nav"),
      t > 300
        ? gotoTop.classList.add("show-top")
        : gotoTop.classList.remove("show-top");
  });
const getProducts = async () => {
    try {
      const e = await fetch("/data/products.json");
      return (await e.json()).products;
    } catch (e) {
      console.log(e);
    }
  },
  categoryCenter = document.querySelector(".category__center");
window.addEventListener("DOMContentLoaded", async function () {
  const e = await getProducts();
  displayProductItems(e);
});
const displayProductItems = (e) => {
    let t = e.map(
      (e) =>
        ` \n                  <div class="product category__products">\n                    <div class="product__header">\n                      <img src=${e.image} alt="product">\n                    </div>\n                    <div class="product__footer">\n                      <h3>${e.title}</h3>\n                      <div class="rating">\n                        <svg>\n                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href="./images/sprite.svg#icon-star-full"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href="./images/sprite.svg#icon-star-empty"></use>\n                        </svg>\n                      </div>\n                      <div class="product__price">\n                        <h4>$${e.price}</h4>\n                      </div>\n                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>\n                    </div>\n                  <ul>\n                      <li>\n                        <a data-tip="Quick View" data-place="left" href="#">\n                          <svg>\n                            <use xlink:href="./images/sprite.svg#icon-eye"></use>\n                          </svg>\n                        </a>\n                      </li>\n                      <li>\n                        <a data-tip="Add To Wishlist" data-place="left" href="#">\n                          <svg>\n                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>\n                          </svg>\n                        </a>\n                      </li>\n                      <li>\n                        <a data-tip="Add To Compare" data-place="left" href="#">\n                          <svg>\n                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>\n                          </svg>\n                        </a>\n                      </li>\n                  </ul>\n                  </div>\n                  `
    );
    (t = t.join("")), categoryCenter && (categoryCenter.innerHTML = t);
  },
  filterBtn = document.querySelectorAll(".filter-btn"),
  categoryContainer = document.getElementById("category");
categoryContainer &&
  categoryContainer.addEventListener("click", async (e) => {
    const t = e.target.closest(".section__title");
    if (!t) return;
    const n = t.dataset.id,
      i = await getProducts();
    if (n) {
      Array.from(filterBtn).forEach((e) => {
        e.classList.remove("active");
      }),
        t.classList.add("active");
      let e = i.filter((e) => {
        if (e.category === n) return e;
      });
      displayProductItems("All Products" === n ? i : e);
    }
  });
const pic1 = document.getElementById("pic1"),
  pic2 = document.getElementById("pic2"),
  pic3 = document.getElementById("pic3"),
  pic4 = document.getElementById("pic4"),
  pic5 = document.getElementById("pic5"),
  picContainer = document.querySelector(".product__pictures"),
  zoom = document.getElementById("zoom"),
  pic = document.getElementById("pic"),
  picList = [pic1, pic2, pic3, pic4, pic5];
let picActive = 1;
["mouseover", "touchstart"].forEach((e) => {
  picContainer &&
    picContainer.addEventListener(e, (e) => {
      const t = e.target.closest("img");
      if (!t) return;
      const n = t.id.slice(3);
      changeImage(`./images/products/iPhone/iphone${n}.jpeg`, n);
    });
});
const changeImage = (e, t) => {
    (pic.src = e),
      (zoom.style.backgroundImage = `url(${e})`),
      picList[picActive - 1].classList.remove("img-active"),
      picList[t - 1].classList.add("img-active"),
      (picActive = t);
  },
  btns = document.querySelectorAll(".detail-btn"),
  detail = document.querySelector(".product-detail__bottom"),
  contents = document.querySelectorAll(".content");
detail &&
  detail.addEventListener("click", (e) => {
    const t = e.target.closest(".detail-btn");
    if (!t) return;
    const n = t.dataset.id;
    if (n) {
      Array.from(btns).forEach((t) => {
        t.classList.remove("active"),
          e.target.closest(".detail-btn").classList.add("active");
      }),
        Array.from(contents).forEach((e) => {
          e.classList.remove("active");
        }),
        document.getElementById(n).classList.add("active");
    }
  });
const slider1 = document.getElementById("glide_1"),
  slider2 = document.getElementById("glide_2"),
  slider3 = document.getElementById("glide_3"),
  slider4 = document.getElementById("glide_4"),
  slider5 = document.getElementById("glide_5");
slider1 &&
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3e3,
    hoverpause: !0,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount(),
  slider2 &&
    new Glide("#glide_2", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      rewin: !1,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: { 1200: { perView: 3 }, 768: { perView: 2 } },
    }).mount(),
  slider3 &&
    new Glide("#glide_3", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      rewin: !1,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: { 1200: { perView: 3 }, 768: { perView: 2 } },
    }).mount(),
  slider4 &&
    new Glide("#glide_4", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      rewin: !1,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    }).mount(),
  slider5 &&
    new Glide("#glide_5", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      rewin: !1,
      autoplay: 3e3,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: { 998: { perView: 2 }, 768: { perView: 1 } },
    }).mount(),
  AOS.init();
