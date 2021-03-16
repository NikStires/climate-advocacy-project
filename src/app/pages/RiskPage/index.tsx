import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from 'react-parallax';

import {
  Container,
  ContentLeft,
  ContentRight,
  SecondContainer,
  Cite,
} from '../../../styles/styles';
import ScrollTop from '../../components/ScrollTop';
import Regions from '../../../img/regions.png';
import AtRisk from '../../../img/atRisk.jpg';
import Deforest from '../../../img/deforest.jpg';
import Fire from '../../../img/norcal-fire.jpg';
import Farm from '../../../img/vertical-farm.jpg';

export function RiskPage() {
  return (
    <>
      <Helmet>
        <title>Risk Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <ContentLeft style={{ minHeight: '90vh' }}>
          <h1>
            <span style={{ color: 'red' }}>Everyone</span> is at risk from
            climate change, but it is{' '}
            <span style={{ color: 'red' }}>not experienced equally</span>.
          </h1>
          <p>
            Affluent people can afford to live in insulated buildings with air
            conditioning and air purifiers where they continue to ignore the
            risk of climate change for the poor, elderly, young and sick
            citizens of the world. People living in small island developing
            states and other coastal regions, megacities, and mountainous and
            polar regions are particularly vulnerable. Children – in particular,
            children living in poor countries – are among the most vulnerable to
            the resulting health risks and will be exposed longer to the health
            consequences.<sup>1</sup> Many people today are so far removed from
            nature that they often forget about the implications of rising
            temperatures and sea levels for wildlife. Rich corporations continue
            to take advantage of poorer countries' looser laws on carbon
            emissions and human rights, tearing down forests that are essential
            for absorbing carbon emissions that continue to grow. To help these
            people and ecosystems at risk we need to pass legislation to help
            protect our forests and prevent new unsustainable factories from
            being constructed, as a species we need to make the decision to
            protect our planet and not the wallets of the few wealthiest people
            on it.
          </p>
          <Cite>
            <sup>1</sup>“Climate Change and Health.” World Health Organization,
            World Health Organization,
            www.who.int/news-room/fact-sheets/detail/climate-change-and-health#:~:text=
            Climate%20change%20affects%20the%20social,malaria%2C%20diarrhoea%20and%20heat%20stress.
          </Cite>
        </ContentLeft>
        <ContentRight>
          <img src={AtRisk} alt="at risk people" />
        </ContentRight>
      </Container>
      <Parallax bgImage={Fire} strength={500}>
        <div style={{ height: 500 }}></div>
      </Parallax>
      <SecondContainer>
        <ContentLeft>
          <h1>Regional Effects In The U.S.</h1>
          <p>
            Northeast: Heat waves, heavy downpours and sea level rise pose
            growing challenges to many aspects of life in the Northeast.
            Infrastructure, agriculture, fisheries and ecosystems will be
            increasingly compromised. Many states and cities are beginning to
            incorporate climate change into their planning.
          </p>
          <p>
            Northwest: Changes in the timing of streamflow reduce water supplies
            for competing demands. Sea level rise, erosion, inundation, risks to
            infrastructure and increasing ocean acidity pose major threats.
            Increasing wildfire, insect outbreaks and tree diseases are causing
            widespread tree die-off.
          </p>
          <p>
            Southeast: Sea level rise poses widespread and continuing threats to
            the region’s economy and environment. Extreme heat will affect
            health, energy, agriculture and more. Decreased water availability
            will have economic and environmental impacts.
          </p>
          <p>
            Midwest: Extreme heat, heavy downpours and flooding will affect
            infrastructure, health, agriculture, forestry, transportation, air
            and water quality, and more. Climate change will also exacerbate a
            range of risks to the Great Lakes.
          </p>
          <p>
            Southwest: Increased heat, drought and insect outbreaks, all linked
            to climate change, have increased wildfires. Declining water
            supplies, reduced agricultural yields, health impacts in cities due
            to heat, and flooding and erosion in coastal areas are additional
            concerns.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={Regions} alt="map of U.S. regions" />
          <Cite>
            Callery, Susan. “The Effects of Climate Change.” NASA, NASA, 23 Dec.
            2020,
            climate.nasa.gov/effects/#:~:text=Increased%20heat%2C%20drought%20and%20insect,coastal%20areas%20are%20additional%20concerns.{' '}
          </Cite>
        </ContentRight>
      </SecondContainer>
      <Parallax bgImage={Deforest} strength={500}>
        <div style={{ height: 500 }}></div>
      </Parallax>
      <Container style={{ minHeight: '80vh' }}>
        <ContentLeft>
          <h1>Agriculture and Deforestation</h1>
          <p>
            While the productivity of agriculture has risen exponentially since
            the rise of industrial agriculture methods, the implications have
            been detrimental for the climate and ecosystems of Earth. Some large
            contributers include transportation of products in the global food
            supply chain, packaging, and food waste. While there are countless
            factors affecting our environment, deforestation and Greenhouse gas
            emissions continue to be the most damaging to the climate. The need
            for sustainable agriculture has never been more urgent to both save
            the environment as well as feed people globally. For many farmers,
            deforestation is necessary to plant crops and is often done by the
            “slash-and-burn” method. This method includes the cutting and
            burning of plants in order to create land suitable for farming. Palm
            oil plantations, cattle ranching, and heavy logging are all also
            types of farming that cause deforestation. Tropical forests and
            savannas are the most suitable areas for farming worldwide, both
            areas that are densely covered in trees and plants. When they are
            cleared, mass amounts of carbon are released, leading to an increase
            of climate change effects across the globe.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={Farm} alt="vertical farm" />
          <Cite>Photo: AeroFarms</Cite>
        </ContentRight>
      </Container>
      <ScrollTop />
    </>
  );
}
