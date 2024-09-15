import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active bg_img1" data-bs-interval="4000">
          <div className="relative isolate px-6 pt-0 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-slate-200">
                  Sizni qiziqtirgan savollarga javoblarni &nbsp;
                  <Link
                    to={"/advantage"}
                    className="font-semibold text-cyan-300"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    ko'rish <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                  Uyda isitish uskunalarini tez va sifatli ta'mirlash
                </h1>
                <p className="mt-6 sm:text-lg text-[15px] px-3 sm:px-0 leading-8 text-white">
                  3000 dan ortiq mijozlar bizga ishonishadi. Sizga
                  xizmatlarimizni taklif qilishdan mamnun bo'lamiz.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to={"/contact"}
                    className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-cyan-700"
                  >
                    Buyurtma berish
                  </Link>
                  <Link
                    to={"/furnitures"}
                    className="text-sm font-semibold leading-6 text-cyan-300 border-spacing-1 border-cyan-300"
                  >
                    Ko'proq ko'rish <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg_img2" data-bs-interval="4000">
          {/* <img src="./img/kif-2.jfif" className="d-block w-100" alt="..." /> */}

          <div className="relative isolate px-6 pt-0 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-slate-200">
                  Sizni qiziqtirgan savollarga javoblarni &nbsp;
                  <Link
                    to={"/advantage"}
                    className="font-semibold text-cyan-300"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    ko'rish <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                  Diagnostika va bepul maslahatlar
                </h1>
                <p className="mt-6 sm:text-lg text-[15px] px-3 sm:px-0 leading-8 text-white">
                  Biz shartnoma bo'yicha qat'iy ishlaymiz va usta buyurtma
                  qilgan kuningiz albatta keladi
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to={"/contact"}
                    className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-cyan-700"
                  >
                    Buyurtma berish
                  </Link>
                  <Link
                    to={"/furnitures"}
                    className="text-sm font-semibold leading-6 text-cyan-300 border-spacing-1 border-cyan-300"
                  >
                    Ko'proq ko'rish <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg_img3" data-bs-interval="4000">
          <div className="relative isolate px-6 pt-0 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-slate-200">
                  Sizni qiziqtirgan savollarga javoblarni &nbsp;
                  <Link
                    to={"/advantage"}
                    className="font-semibold text-cyan-300"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    ko'rish <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                  Hayratda qoldiradigan arzon narxlar
                </h1>
                <p className="mt-6 sm:text-lg text-[15px] px-3 sm:px-0 leading-8 text-white">
                  Mijozlarimiz tomonidan qo'yilgan murakkab muammolarni hal
                  qilish
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to={"/contact"}
                    className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-cyan-700"
                  >
                    Buyurtma berish
                  </Link>
                  <Link
                    to={"/furnitures"}
                    className="text-sm font-semibold leading-6 text-cyan-300 border-spacing-1 border-cyan-300"
                  >
                    Ko'proq ko'rish <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;