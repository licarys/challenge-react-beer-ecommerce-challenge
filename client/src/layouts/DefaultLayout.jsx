import './DefaultLayout.scss';

function DefaultLayout({ children }) {
  return (
    <section className="default-layout">
      {children}
    </section>
  );
}

export default DefaultLayout;
