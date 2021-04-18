import SyncIcon from "@material-ui/icons/Sync";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import PeopleIcon from "@material-ui/icons/People";

import "../styles/Card.css";
const Card = () => {
  return (
    <div className="card card__cash">
      <div className="card__container cash">
        <div className="card__balance">
          <div>
            <span className="balance">
              <p>&#8358;5.00</p>
              <SyncIcon />
            </span>
            <span className="date">
              <p>@ Apr 18 2021 2:25 PM</p>
            </span>
          </div>
          <div>
            <span>eCash</span>
            <span>
              <p>ACTIVE</p>
            </span>
          </div>
        </div>
        <div className="card__details">
          <p>**** **** **** **** 0053</p>
        </div>
        <div className="card__holder">
          <span>
            <h1>Anuforo Okechukwu...</h1>
          </span>
          <span>
            <p>12/50</p>
          </span>
          <span>
            <CreditCardIcon />
          </span>
        </div>
      </div>
      <div className="card__container">
        <div className="card__title">
          <h1>Frequent Payments</h1>
        </div>
        <div className="card__left">
          <div className="left">
            <span>
              <PhoneAndroidIcon />
              <p>0 airtime</p>
            </span>
            <span>
              <HowToVoteIcon />
              <p>3 bills</p>
            </span>
          </div>
          <div className="right">
            <span>
              <PeopleIcon />
              <p>0 Transfer</p>
            </span>
          </div>
        </div>
      </div>

      <div className="card__container">
        <div className="card__title">
          <h1>Transaction History</h1>
        </div>
        <div className="card__left isRight">
          <div className="right">
            <span>
              <PeopleIcon />
              <p>check status</p>
            </span>
          </div>
          <div className="right">
            <span>
              <h1>14</h1>
              <p>14 Transactions April, 2021</p>
            </span>
          </div>
        </div>
      </div>
      <div className="card__container">
        <div className="card__title">
          <h1>Transaction History</h1>
        </div>
        <div className="card__left isRight">
          <div className="right">
            <span>
              <PeopleIcon />
              <p>check status</p>
            </span>
          </div>
          <div className="right">
            <span>
              <PeopleIcon />
              <p>14 Transactions April, 2021</p>
            </span>
          </div>
        </div>
      </div>

      <div className="card__container">
        <div className="card__title">
          <h1>Frequent Payments</h1>
        </div>
        <div className="card__left">
          <div className="left">
            <span>
              <PhoneAndroidIcon />
              <p>0 airtime</p>
            </span>
            <span>
              <HowToVoteIcon />
              <p>3 bills</p>
            </span>
          </div>
          <div className="right">
            <span>
              <PeopleIcon />
              <p>0 Transfer</p>
            </span>
          </div>
        </div>
      </div>

      <div className="card__container">
        <div className="card__title">
          <h1>Frequent Payments</h1>
        </div>
        <div className="card__left">
          <div className="left">
            <span>
              <PhoneAndroidIcon />
              <p>0 airtime</p>
            </span>
            <span>
              <HowToVoteIcon />
              <p>3 bills</p>
            </span>
          </div>
          <div className="right">
            <span>
              <PeopleIcon />
              <p>0 Transfer</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
