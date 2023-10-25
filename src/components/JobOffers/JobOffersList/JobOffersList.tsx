import styles from "./JobOffersList.module.scss";
import JobOfferCard from "./JobOfferCard/JobOfferCard";
import { IJobs } from "../../../services/types";

function JobOffersList(props: {offers: IJobs}) {
  return (
    <div className={styles["job-offers-list"]}>
      {props.offers.map((offer) => <JobOfferCard key={offer._id} {...offer} />)}
    </div>
  )
}
export default JobOffersList;
