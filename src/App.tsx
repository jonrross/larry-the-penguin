import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              color: '#374151',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;