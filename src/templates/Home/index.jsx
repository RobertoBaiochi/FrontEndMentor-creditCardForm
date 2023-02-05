import BackgroundSection from '../../components/BackgroundSection';
import CardsSection from '../../components/CardsSection';
import FormComponent from '../../components/Form';

import { StatesProvider } from '../../context/StatesProvider';

function App() {
  return (
    <BackgroundSection>
      <StatesProvider>
        <CardsSection />
        <FormComponent />
      </StatesProvider>
    </BackgroundSection>
  );
}

export default App;
