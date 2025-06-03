import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'
import Form1 from './Form'
import MyNavbar from './Components/Navbar'
import ProductsList from './Components/ProductList'


function App() {
  console.log("hello,")
   const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
const env = process.env.REACT_APP_API_URL
  

  return (
    <div className="App">
       <h1>Environment: {process.env.REACT_APP_ENV}</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>Français</button>
     <MyNavbar/>
     {/* <Form1>

      </Form1> */}
      <ProductsList/>

    </div>

      
  );
}

export default App;
