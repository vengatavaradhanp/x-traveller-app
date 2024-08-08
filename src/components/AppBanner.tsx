import React from "react";
import Image from "next/image";
import Background from "../../public/assets/Backgroundimg.svg";
import { Text, Stack, Footer } from "rsuite";
import styles from "../assets/styles/app-banner.module.css";
import HomeCard from "./HomeCard";
import OffersforYou from "./OffersforYou";
import bgImage from "../assets/images/bg.jpg";
import PopularTouristspots from "./PopularTouristspots";

export default function AppBanner() {
  return (
    <div>
      <div className={styles.bannerContainer}>
        {/* <Image src={Background} alt="Brand Logo" /> */}
        <div className={styles.centeredText} style={{ alignItems: "center" }}>
          <Stack>
            <h3 className={styles.heading}>
              The world is a{" "}
              <span style={{ fontFamily: "Raleway", fontStyle: "italic" }}>
                canvas
              </span>{" "}
              to the imagination.
            </h3>
          </Stack>
          <Stack style={{ margin: "20px 0px 20px 51px", width: "58%" }}>
            <Text className={styles.subText} style={{ alignItems: "center" }}>
              we&apos;ve got you covered. Our easy-to-use platform allows you to
              seamlessly book flights, accommodations, and activities, ensuring
              a hassle-free travel experience from start to finish.
            </Text>
          </Stack>
          <div>
            <HomeCard />
          </div>
        </div>
      </div>
      <div className={styles.centeredCard}>
        <div>
          <OffersforYou />
        </div>
      </div>
      <div className={styles.popularCard}>
        <div>
          <PopularTouristspots />
        </div>
      </div>
    </div>
  );
}
