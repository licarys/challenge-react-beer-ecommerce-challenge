import './DefaultLayout.scss';
import Header from '../components/Header';

function DefaultLayout({ children }) {
  return (
    <section className="default-layout">
      <Header />
      <div className="welcome-message">
        <p className="subtitle">Hi Mr. Michael,</p>
        <h1 className="title">Welcome Back!</h1>
        </div>
      {children}
    </section>
  );
}

export default DefaultLayout;
