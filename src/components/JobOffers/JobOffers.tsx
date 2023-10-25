import JobOffersList from "./JobOffersList/JobOffersList";
import JobOffersSearch from "./JobOffersSearch/JobOffersSearch";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins";
import styles from "./JobOffers.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IJobs } from "../../services/types";

// let offers: JobOffer[] = [];

// for (let i = 0; i < 20; i++) {
//   offers.push(new JobOffer(i.toString(), "title", "companyName", "city", "country", "workLocation", "seniority", 1000, 2000, "currency", "https://i.imgur.com/eUxCdeB.png", new Date("2023-01-01")));
// }

function JobOffers() {
  const [offers, setOffers] = useState<IJobs>([]);
  
  useEffect(() => {
    axios.get("../../mock/company_cards.json")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.log("Error at get data", error);
      });
  }, []);

  return (
    <div className={styles['job-offers-container']}>
      <JobOffersSearch />
      <JobOffersList offers={offers}/>
    </div>
  );
}

export default JobOffers;
