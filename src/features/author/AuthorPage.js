import Container from "../../common/Container";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Tomasz Sampławski"
      body={
        <>
          <p>
            Urodziłem się w <strong>Bydgoszczy</strong>. Spędziłem tam
            dzieciństwo i wczesną młodość. Nauki przez pierwsze 12 lat
            pobierałem w Zeszpole Szkół Muzycznych w Bydgoszczy (instrument
            główny - klarnet). Następnie przez 5 lat studiowałem na Akademii
            Muzycznej im. Feliksa Nowowijskiego w Bydgoszczy (kierunek -
            dyrygentura). Po Studiach pracowałem w "Opera Nova", oraz jako
            nauczyciel w szkołach w Polsce, a poźniej w Anglii.
          </p>
          <p>
            Po powrocie z Anglii podjąłem przcę w Atos Polska. Najpierw jako
            pierwsza linia wsparcia końcowego użytkownika, a następnie jako
            <i>inżynier/analityk</i> <strong>NexThink</strong>. NexThink, to
            narzędzie służące do badania i analizy dużych środowisk (5000+
            komputerów) w czasie rzeczywistym pod kątem zrozumienia jak
            pracownicy doświadczają IT. Jako, że technologia, choć ciekawa, nie
            pozwala na kreatywność i jest bardzo "wąska" postanowiłem się
            dokształcić i przekwalifikować.
          </p>
        </>
      }
    />
    <Footer />
  </Container>
);

export default AuthorPage;
