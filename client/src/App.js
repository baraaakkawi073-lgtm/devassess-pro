import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ReportPage from './pages/ReportPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="font-mono text-sm font-bold text-brand-500">404</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/:categoryId" element={<QuizPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
