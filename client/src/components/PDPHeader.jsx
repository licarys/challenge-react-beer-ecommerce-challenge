import { useNavigate } from 'react-router-dom';
import './PDPHeader.scss';

function PDPHeader() {
  const navigate = useNavigate();

  return (
    <div className="pdp-header">
      <button className="header-icon" onClick={() => navigate(-1)} aria-label="Go back">
        <img src="/icons/back.svg" alt="Back" />
      </button>

      <h2 className="pdp-title">Detail</h2>

      <button className="header-icon" aria-label="More options">
        <img src="/icons/dots.svg" alt="Menu" />
      </button>
    </div>
  );
}

export default PDPHeader;
