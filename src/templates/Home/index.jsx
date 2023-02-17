import BackgroundSection from '../../components/BackgroundSection';
import CardsSection from '../../components/CardsSection';
import FormSection from '../../components/FormSection';
import SectionContainer from '../../components/SectionContainer';
import { StatesProvider } from '../../context/StatesProvider';



function App() {

  return (
    <BackgroundSection>
      <SectionContainer>
        <StatesProvider>
          <CardsSection />
          <FormSection />
        </StatesProvider>
      </SectionContainer>
    </BackgroundSection>
  );
}

export default App;
