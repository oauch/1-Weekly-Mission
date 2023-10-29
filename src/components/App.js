import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import 'styles/variables.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
