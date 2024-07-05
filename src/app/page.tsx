import Image from "next/image";
import styles from "./page.module.scss";

import appStoreImg from "../img/appStore.svg";
import googlePlayImg from "../img/googlePlay.svg";
import dec from "../img/dec.png";

import reviews1 from "../img/reviews/1.png";
import reviews2 from "../img/reviews/2.png";
import reviews3 from "../img/reviews/3.png";
import reviews4 from "../img/reviews/4.png";

import reviewsData from "../../public/reviews.json";

const reviewsImgs = [reviews1, reviews2, reviews3, reviews4];

export default function Home() {
  console.log(reviewsData);
  return (
    <main className={styles.main}>
      <div className={styles.mainInfo}>
        <h1>
          Do you want to Learn more About cryptocurrencies
          <span className={styles.gradientText}> quickly and easily ?</span>
        </h1>
        <h2>Subscribe to our channel to learn more</h2>
        <div className={styles.info}>
          <div className={styles.info__item}>
            <p>20k+</p>
            <h3>subscribers</h3>
          </div>
          <div className={styles.info__item}>
            <p>19,5k</p>
            <h3>successful cases</h3>
          </div>
          <div className={styles.info__item}>
            <p>4.8/5</p>
            <h3>rating</h3>
          </div>
        </div>
        <button className={styles.mainBtn}>Join Whatsapp</button>
        <div className={styles.bottomButtons}>
          <button>
            <Image
              width={24}
              src={googlePlayImg}
              height={24}
              alt="googlePlay"
            />
            <div>
              <p>get it on</p>
              <h4>Google play</h4>
            </div>
          </button>
          <button>
            <Image width={24} src={appStoreImg} height={24} alt="googlePlay" />
            <div>
              <p>Available on the</p>
              <h4>App Store</h4>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.reviews}>
        {reviewsData.data.map((item, index) => (
          <div
            key={index}
            className={`${styles.reviews__item} ${
              index % 2 == 0 ? "" : styles.reviews__item_left
            }`}
          >
            <div className={styles.reviews__info}>
              <Image
                src={reviewsImgs[index]}
                width={48}
                height={48}
                alt="img"
              ></Image>
              <div>
                <h4>{item.name}</h4>
                <p>{item.tag}</p>
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <img src={dec.src} alt="" className={styles.decoration}></img>
    </main>
  );
}
