// import { useContext } from 'react';
import BackgroundSection from '../../components/BackgroundSection';
import CardsSection from '../../components/CardsSection';
import FormSection from '../../components/FormSection';
import { StatesProvider } from '../../context/StatesProvider';
// import { StatesContext } from '../../context/StatesProvider/context';

function App() {

  return (
    <BackgroundSection>
      <StatesProvider>
        <CardsSection />
        <FormSection />
      </StatesProvider>
    </BackgroundSection>
  );
}

export default App;
