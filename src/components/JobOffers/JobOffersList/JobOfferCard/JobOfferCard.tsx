import { IJob } from '../../../../services/types';
import styles from './JobOfferCard.module.scss';


function JobOfferCard (props: IJob) {
  return (
    <div className={styles["offer"]}>
      <img className={styles["logo"]} src={props.image} alt="Company logo" />
      <div className={styles["offer-data"]}>
        <div className={styles["title"]}>{props.title}</div>
        <div className={styles["offer-details"]}>
          <div className={styles["company"]}>{props.companyName}</div>
          <div className={styles["location-seniority"]}>
            <Separator />
            <div>{props.city}, {props.country}</div>
            <Separator />
            <div>{props.workLocation}</div>
            <Separator />
            <div>{props.seniority}</div>
            <Separator />
            <div className={styles["salary"]}>{props.salaryFrom} - {props.salaryTo} {props.currency} net</div>
          </div>
        </div>
      </div>
      <DaysBetween {...props} />
  </div>
  );
}

function daysBetween(date1: Date, date2: string): number {
  const date2Converted = new Date(date2);
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffDays = Math.round(Math.abs((date1.getTime() - date2Converted.getTime()) / oneDay));
  return diffDays;
}

function Separator() {
  return (
    <div className={styles["separator"]}></div>
  )
}

function DaysBetween(props: IJob) {
  const daysSinceCreated = daysBetween(new Date(), props.createdAt);
    switch (daysSinceCreated) {
      case 0:
        return <div className={styles["days-between"]}>Today</div>;
      case 1:
        return <div className={styles["days-between"]}>Yesterday</div>;
      default:
        return <div className={styles["days-between"]}>{daysSinceCreated} days ago</div>;
    }
}

export default JobOfferCard;