import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BuyNowPage from './pages/BuyNowPage';
import ThankYouPage from './pages/ThankYouPage';
import ApplyNowPage from './pages/ApplyNowPage';
import ReadMorePage from './pages/ReadMorePage';
import GetStartedPage from './pages/GetStartedPage';
import ThankYouPage2 from './pages/ThankYouPage2';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/buy/:id" element={<BuyNowPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} /> 
            <Route path="/apply" element={<ApplyNowPage />} />
            <Route path="/read-more" element={<ReadMorePage />} />
            <Route path="/thank-you-2" element={<ThankYouPage2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

