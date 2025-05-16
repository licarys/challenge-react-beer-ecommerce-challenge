import './Header.scss';

function Header() {
  return (
    <header className="header">
      <button className="menu-btn" aria-label="Open menu">
        <svg viewBox="0 0 100 80" width="24" height="24">
          <rect width="67" height="8" rx="6.3"></rect>
          <rect y="30" width="42" height="6.3" rx="4"></rect>
          <rect y="60" width="67" height="6.3" rx="4"></rect>
        </svg>
      </button>
      <div className="spacer"></div>
      <img
        className="avatar"
        src="/profile/user.jpg"
        alt="User avatar"
      />
    </header>
  );
}

export default Header;
