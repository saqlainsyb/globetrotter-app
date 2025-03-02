import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Globetrotter from './pages/GlobetrotterGame';
import InvitationPage from './pages/Invitation';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-globetrotter" element={<Globetrotter />} />
        <Route path="/play-globetrotter/invitation" element={<InvitationPage />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
