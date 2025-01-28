import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import FeaturesPage from './components/featurespage';
import PackagePage from './components/package';
import MembershipPage from './components/membership';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseCasesPage from './components/usecases';
import AdsPage from './components/ads';
import RealEstatePage from './components/realestate';
import PricingPage from './components/pricingpage';
import Marketplace from './components/market';
import SetupServicePage from './components/setupservice';
import SEOComponent from './components/seo';
import AdvancedServices from './components/advanced';
import ContactPage from './components/contactpage';
import Blogs from './components/blogs';
import FAQ from './components/faq';
import DemoPage from './components/demopage';
import ScrollToTop from './components/scroll';

function App() {
  return (
    <div className="App" style={{height:'200vh'}}>

     <BrowserRouter>
     <ScrollToTop/>
     <MyNavbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/featurepage' element={<FeaturesPage/>}/>
      <Route path='/package' element={<PackagePage/>}/>
      <Route path='/membership' element={<MembershipPage/>}/>
      <Route path='/usecases' element={<UseCasesPage/>}/>
      <Route path='/ads' element={<AdsPage/>}/>
      <Route path='/realestate' element={<RealEstatePage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/marketplace' element={<Marketplace/>}/>
      <Route path='/setupservice' element={<SetupServicePage/>}/>
      <Route path='/seo' element={<SEOComponent/>}/>
      <Route path='/advanced' element={<AdvancedServices/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/demo' element={<DemoPage/>}/>
     </Routes>
     <Footer/>

     </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
