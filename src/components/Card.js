import SyncIcon from "@material-ui/icons/Sync";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import "../styles/Card.css";
const Card = () => {
  return (
    <div className="card card__cash">
      <div className="card__container">
        <div className="card__balance">
          <div>
            <span>
              <p>N5.00</p>
              <SyncIcon />
            </span>
            <span>
              <p>@ Apr 18 2021 2:25 PM</p>
            </span>
          </div>
          <div>
            <span>eCash</span>
            <span>ACTIVE</span>
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
        <div className="card__balance">
          <div>
            <span>
              <p>N5.00</p>
              <SyncIcon />
            </span>
            <span>
              <p>@ Apr 18 2021 2:25 PM</p>
            </span>
          </div>
          <div>
            <span>eCash</span>
            <span>ACTIVE</span>
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
        <div className="card__balance">
          <div>
            <span>
              <p>N5.00</p>
              <SyncIcon />
            </span>
            <span>
              <p>@ Apr 18 2021 2:25 PM</p>
            </span>
          </div>
          <div>
            <span>eCash</span>
            <span>ACTIVE</span>
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
    </div>
  );
};

export default Card;
