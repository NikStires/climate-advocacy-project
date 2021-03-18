import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Container,
  ContentLeft,
  ContentRight,
  SecondContainer,
  Cite,
} from '../../../styles/styles';
import ScrollTop from '../../components/ScrollTop';
import Wave from '../../components/Wave';
import Solar from '../../../img/solar.jpg';
import Ecar from '../../../img/ecar.jpg';
import Cow from '../../../img/cow.jpg';

export function HelpPage() {
  return (
    <>
      <Helmet>
        <title>Help Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <ContentLeft>
          <h1>
            Healing the planet{' '}
            <span style={{ color: 'red' }}>starts in your home</span>, and at
            your dinner table.
          </h1>
          <p>
            Fighting climate change does not have to be a hassle or take joy
            away from your life. The idea is simple, reduce our carbon emissions
            by as much as we can, the easiest way to do this is to reduce the
            amount of fossil fuels we burn. We burn fossil fuels to produce
            energy that we use to heat our homes, fuel our cars, and charge our
            phones. To reduce these emissions we must turn to renewable energy
            and restoration of forests around the world. With modern technology
            we can harness solar, geothermal, hydroelectric, and wind power to
            power cities around the globe.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={Solar} alt="" />
          <Cite>Photo by Gustavo Fring from Pexels</Cite>
        </ContentRight>
      </Container>
      <Wave
        link="http://www.w3.org/2000/svg"
        view="0 0 1440 320"
        color="#8DDFB9"
        opacity="1"
        d="M0,64L0,256L65.5,256L65.5,256L130.9,256L130.9,128L196.4,128L196.4,32L261.8,32L261.8,0L327.3,0L327.3,224L392.7,224L392.7,32L458.2,32L458.2,0L523.6,0L523.6,256L589.1,256L589.1,32L654.5,32L654.5,160L720,160L720,256L785.5,256L785.5,160L850.9,160L850.9,224L916.4,224L916.4,192L981.8,192L981.8,96L1047.3,96L1047.3,32L1112.7,32L1112.7,128L1178.2,128L1178.2,64L1243.6,64L1243.6,256L1309.1,256L1309.1,96L1374.5,96L1374.5,288L1440,288L1440,320L1374.5,320L1374.5,320L1309.1,320L1309.1,320L1243.6,320L1243.6,320L1178.2,320L1178.2,320L1112.7,320L1112.7,320L1047.3,320L1047.3,320L981.8,320L981.8,320L916.4,320L916.4,320L850.9,320L850.9,320L785.5,320L785.5,320L720,320L720,320L654.5,320L654.5,320L589.1,320L589.1,320L523.6,320L523.6,320L458.2,320L458.2,320L392.7,320L392.7,320L327.3,320L327.3,320L261.8,320L261.8,320L196.4,320L196.4,320L130.9,320L130.9,320L65.5,320L65.5,320L0,320L0,320Z"
        pathLength={0.704}
      />
      <SecondContainer>
        <ContentLeft>
          <h1>Make your next car purchase electric.</h1>
          <p>
            Buying an electric car not only is better for the planet and a great
            way to save money but in recent years it is even becoming trendy.
            With biig name car companies such as Tesla and now even Volkswagon
            leaving behind the combustion engine forever the variety and quality
            of electric cars has never been better. While the power used to
            charge electric vehicles is still prooucing emissions through the
            non renewable production of electricity electric cars are still much
            more efficient in their energy consumption and are not dependent on
            oil. Additionally as more of the energy grid gets powered by
            renewable energy electric cars can get us closer to zero emissions.
            On top of being better for the environment owning an electric
            vehicle can be much cheaper in repairs and save you time in trips to
            the gas station by recharging at your home. By switching to electric
            we can help eliminate fossil fuels entiiirely and leave the
            combustion engine in the past.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={Ecar} alt="electriic car" />
          <Cite>Photo by Rathaphon Nanthapreecha from Pexels</Cite>
        </ContentRight>
      </SecondContainer>
      <Wave
        link="http://www.w3.org/2000/svg"
        view="0 0 1440 320"
        color="#8DDFB9"
        opacity="1"
        d="M0,96L720,256L1440,64L1440,0L720,0L0,0Z"
        pathLength={0.483}
      ></Wave>
      <Container>
        <ContentLeft>
          <h1>Reduce the number of meals you eat that contain meat.</h1>
          <p>
            When you take into account meat’s entire lifecycle, each meat eater
            is responsible for 1.5 more tons of greenhouse gases than a vegan
            per year. By contrast, switching from a Toyota Camry to a hybrid
            Toyota Prius would save one ton of greenhouse gases annually.
            <sup>1</sup>
            Obviously the best way to change your diet and help the planet is to
            eat no meat at all but for some people this may be difficult, but it
            is important to remember that saving on greenhouse gas emissions is
            not a binary outcome but a spectrum. Just by reducing the amount of
            meat you eat to 4 days a week you can still save a ton in emissions.
            A study by Drs. Pamela Martin and Gidon Eshel of the University of
            Chicago took into account that the digestive systems of ruminant
            animals used for red meat are a main source of methane, a greenhouse
            gas that’s 23 times more warming than carbon dioxide, although it
            cycles out of the atmosphere in eight years, compared to CO2’s more
            than 100. Livestock manure is also responsible for 65 percent of
            nitrous oxide emissions—another greenhouse gas that, while less
            warming than CO2, persists in the atmosphere even longer.
            <sup>2</sup> Keeping livestock on large scales largely effects
            global warming through the emission of greenhouse gasses and
            deforestation cause by the clearing of forests for livestock to
            graze.
          </p>
          <Cite>
            <sup>1</sup> Rysavy, Tracy. “Eat Less Meat, Cool the Planet.” Green
            America,
            www.greenamerica.org/eat-less-meat-cool-planet#:~:text=In%20short%2C%20even%20if%20you,your%20personal%20greenhouse%20gas%20emissions.&amp;text=%E2%80%9CAnd%20the%20less%20meat%20you,you%20tread%20on%20the%20planet.%E2%80%9D.{' '}
          </Cite>
        </ContentLeft>
        <ContentRight>
          <img src={Cow} alt="cow" />
          <Cite>Photo by Julia Volk from Pexels</Cite>
          <Cite>
            <sup>2</sup> Eshell, Gidon, and Pamela Martin. “Study: Vegan Diets
            Healthier for Planet, People than Meat Diets.” The University of
            Chicago News Office,
            www-news.uchicago.edu/releases/06/060413.diet.shtml.{' '}
          </Cite>
        </ContentRight>
      </Container>
      <ScrollTop />
    </>
  );
}
