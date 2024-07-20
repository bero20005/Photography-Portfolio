import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

const App = () => {

  return (
    <Router>
      <Header />
      <AnimRoutes />
      <motion.div
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      />
    </Router>
  );
};

export default App;
