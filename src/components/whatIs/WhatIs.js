import React, { useEffect } from "react";
import styles from "./WhatIs.module.css";
import van_grayscale from "../../assets/images/van_grayscale.jpg";
import rows from "../../assets/images/rows.jpg";
import desktop from "../../assets/images/desktop.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const WhatIs = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div>
      <div className="container-fluid p-0"></div>
      <div className="text-center d-flex row align-items-center p-0 m-0">
        <img src={van_grayscale} alt="" className="img-fluid p-0" />
        <div
          className={`position-absolute text-center display-6 text-uppercase ${styles.h1}`}
        >
          Steelman Society is about being the change
        </div>
      </div>

      <div data-aos="fade-up">
        <main className={` ${styles.main} `}>
          <div className="container-lg bg-light rounded">
            <div className="row justify-content-center my-5 py-5">
              <div className="col-md-5 text-center text-md-start">
                <h1>
                  <div className="display-5">Our Mission</div>
                  <div className="display-6 text-muted">Forging the Self</div>
                </h1>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Esse, est laboriosam provident aut aliquam voluptas quod eum
                  rerum laborum modi ad dolorum tenetur voluptates aspernatur ab
                  consequuntur numquam nobis optio. Deleniti cupiditate nihil
                  atque odio quia dignissimos. Voluptates quidem hic dolore nam
                  a rerum maxime sunt illum blanditiis nobis eveniet,
                  perspiciatis fugiat adipisci, placeat at ducimus voluptatum
                  enim officiis facilis optio saepe temporibus voluptate!
                  Delectus cum sed, laudantium corrupti tenetur laboriosam
                  possimus, tempore perferendis animi distinctio, nam ratione
                  neque illo eveniet id! Tempore eaque numquam officiis ratione.
                  Non amet exercitationem minima praesentium, iste nobis modi
                  nisi dignissimos ipsum architecto ducimus!
                </p>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum hic cupiditate explicabo, illo aliquam excepturi quas ab
                  molestiae modi, debitis quaerat odit dolorum magni saepe
                  delectus culpa inventore vel, impedit iste! Facere molestiae
                  reiciendis exercitationem architecto nobis sint ducimus totam,
                  expedita quod voluptatum eos dolore dignissimos atque commodi.
                  Tempora suscipit quod facere vitae quaerat temporibus
                  cupiditate veniam autem labore nostrum itaque minus accusamus
                  sequi inventore, magni animi nobis voluptatibus modi!
                </p>
              </div>
              <div className="col-md-5 text-center">
                <img className="img-fluid rounded" src={desktop} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div data-aos="fade-up">
        <main className={` ${styles.main} `}>
          <div className="container-lg bg-light rounded">
            <div className="row justify-content-center my-5 py-5">
              <div className="col-md-5 text-center text-md-start">
                <h1>
                  <div className="display-5">Our Method</div>
                  <div className="display-6 text-muted">
                    Growth through strife
                  </div>
                </h1>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum hic cupiditate explicabo, illo aliquam excepturi quas ab
                  molestiae modi, debitis quaerat odit dolorum magni saepe
                  delectus culpa inventore vel, impedit iste! Facere molestiae
                  reiciendis exercitationem architecto nobis sint ducimus totam,
                  expedita quod voluptatum eos dolore dignissimos atque commodi.
                  Tempora suscipit quod facere vitae quaerat temporibus
                  cupiditate veniam autem labore nostrum itaque minus accusamus
                  sequi inventore, magni animi nobis voluptatibus modi!
                </p>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  culpa iste pariatur quisquam mollitia quia, perspiciatis
                  reprehenderit iure repellat tenetur unde, eaque provident.
                  Aperiam mollitia quaerat omnis beatae corrupti doloribus,
                  itaque dolor aliquid obcaecati sint recusandae nam nulla,
                  dolorem distinctio, dolore minima laboriosam adipisci
                  inventore nemo harum assumenda accusamus veniam officia!
                  Perspiciatis, voluptatibus. Saepe hic soluta vel, esse, alias
                  earum in sunt ut deserunt possimus fugiat. Pariatur molestias
                  corrupti doloremque porro officiis aliquid, nobis temporibus
                  quis hic ab tenetur voluptate eligendi libero quos mollitia
                  similique commodi. Saepe, obcaecati quibusdam inventore
                  similique ducimus qui possimus maiores ipsa! Ut sit doloribus
                  amet.
                </p>
              </div>
              <div className="col-md-5 text-center">
                <img className="img-fluid rounded" src={rows} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WhatIs;
