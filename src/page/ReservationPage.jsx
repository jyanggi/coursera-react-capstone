import TableReservation from "../components/booking/TableReservation";
import "./ReservationPage.scss";
import img1 from "./restaurant.jpg";
import img2 from "./restaurant chef B.jpg";
function ReservationPage() {
  return (
    <div className="reservation-page">
      <section className="heading">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Find a table for any location</p>
        <div className="heading-images">
          <article>
            <img src={img1} alt="restaurant" />
          </article>
          <article>
            <img src={img2} alt="chef" />
          </article>
        </div>
      </section>
      <TableReservation />
    </div>
  );
}

export default ReservationPage;
