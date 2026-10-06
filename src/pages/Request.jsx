import { Link } from "react-router-dom";
import RequestForm from "../components/RequestForm";

function Request() {
  return (
    <main className="request-page">
      <div className="request-back-container">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </div>

      <RequestForm />
    </main>
  );
}

export default Request;