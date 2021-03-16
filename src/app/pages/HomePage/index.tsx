import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Container,
  SecondContainer,
  ContentLeft,
  ContentRight,
  Cite,
} from '../../../styles/styles';
import ScrollTop from '../../components/ScrollTop';
import Change from '../../../img/climate.gif';
import Chart from '../../../img/chart.svg';
import Wave from '../../components/Wave';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <ContentLeft>
          <h1>
            Earth’s global average surface temperature in{' '}
            <span style={{ color: 'red' }}>2020</span> tied with 2016 as the{' '}
            <span style={{ color: 'red' }}>warmest year on record</span>.
          </h1>
          <p>
            During the pandemic it has felt as if our lives are all on hold, we
            cannot go out and see our friends or travel to see our families. Our
            jobs have gone remote and American politics have been saturating our
            news outlets. Many may have forgotten about climate change but that
            does not mean climate change has not ceased to exist. As inhabitants
            of this planet and as the main contributors to greenhouse gasses and
            the destruction of countless ecosystems we have a duty as a species
            to do everything we can to combat the heating of our planet.
            Thankfully we have the power and technology to reverse some of these
            changes and help prevent future threats to the health of our planet,
            our biggest obstacle is widespread cooperation and education.
            Together we can Identify the most pressing issues, devise scientific
            solutions and move away from fossil fuels and towards the green
            energy of the future!
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={Change} alt="Change 2016-2020" />
          <Cite>
            NASA's Scientific Visualization Studio. Data provided by Robert B.
            Schmunk (NASA/GSFC GISS).
          </Cite>
        </ContentRight>
      </Container>
      <Wave
        link="http://www.w3.org/2000/svg"
        view="0 0 1440 320"
        color="#8ddfb9"
        opacity="1"
        d="M0,96L21.8,90.7C43.6,85,87,75,131,106.7C174.5,139,218,213,262,229.3C305.5,245,349,203,393,192C436.4,181,480,203,524,176C567.3,149,611,75,655,58.7C698.2,43,742,85,785,106.7C829.1,128,873,128,916,133.3C960,139,1004,149,1047,170.7C1090.9,192,1135,224,1178,213.3C1221.8,203,1265,149,1309,133.3C1352.7,117,1396,139,1418,149.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        pathLength={0.4705}
      />
      <SecondContainer>
        <ContentLeft>
          <h1>Greenhouse Gasses in the U.S.</h1>
          <p>
            Greenhouse gasses in the U.S. from the top 5 sources:
            transportation, electricity production, industry, comercial, and
            residential are all a result of burning fossil fuels for energy. The
            transportation sector generates the largest share of greenhouse gas
            emissions. Greenhouse gas emissions from transportation primarily
            come from burning fossil fuel for our cars, trucks, ships, trains,
            and planes. Over 90 percent of the fuel used for transportation is
            petroleum based, which includes primarily gasoline and diesel.
            Agriculture (10.1 percent of 2020 greenhouse gas emissions) –
            Greenhouse gas emissions from agriculture come from livestock such
            as cows, agricultural soils, and rice production.
          </p>
          <Cite>
            “Sources of Greenhouse Gas Emissions.” EPA, Environmental Protection
            Agency, 4 Dec. 2020,
            www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions.{' '}
          </Cite>
        </ContentLeft>
        <ContentRight>
          <img src={Chart} alt="" />
        </ContentRight>
      </SecondContainer>
      <ScrollTop />
    </>
  );
}
