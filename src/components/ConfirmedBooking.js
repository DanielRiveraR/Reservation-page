import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleBackToForm = () => {
    console.log('back to home works');
    navigate('/');
  };

  return (
    <>
      <div className="confirmation-page max-width-container">
        <h2> Your booking has been confirmed</h2>
        <p>We'll send you an email with all the details.</p>
        <div className="confirmation-goodbye">
          <p>Have a nice day!</p>
        </div>
      </div>
      <div className="back-button max-width-container" >
        <Button onClick={(handleBackToForm)} text={'Go Back to Home'} />
      </div>
    </>
  );
};

export default ConfirmedBooking;
