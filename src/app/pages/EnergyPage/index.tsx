import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  ContentLeft,
  ContentRight,
  SecondContainer,
  Cite,
} from '../../../styles/styles';
import { Parallax } from 'react-parallax';
import ScrollTop from '../../components/ScrollTop';

import EnergyPie from '../../../img/energy.svg';
import Turbine from '../../../img/turbine.jpg';
import HowTurbine from '../../../img/how-turbine.jpeg';
import Panel from '../../../img/panels.jpg';
import HowSolar from '../../../img/how-solar.jpeg';
import Hydro from '../../../img/hydro.jpg';
import HowHydro from '../../../img/how-hydro.jpeg';

export function EnergyPage() {
  return (
    <>
      <Helmet>
        <title>Energy Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container style={{ minHeight: '90vh' }}>
        <ContentLeft>
          <h1>
            <span style={{ color: 'red' }}>Renewable energy</span> is the best
            way to fight climate change.
          </h1>
          <p>
            Renewable energy, sometimes referred to as clean energy, is energy
            produced from things that are constantly replenished. This may
            include things like sunlight or wind, even if they depend on
            weather. Renewable energy is not new, humans have been harnessing
            nature's power for things like heating, transportation, lighting,
            and more. For example, humans have been using wind to sail their
            boats for centuries. Unfortunately over the last 500 years, humans
            have turned to dirtier energy sources that harm the environment,
            such as coal and fracked gas. The need for a switch to renewable
            energy on a large scale has never been more urgent to save our
            environment. Dirty energy’s effects are already being seen on both
            humans and the environment. For example, the technology associated
            with fracking can cause earthquakes and water pollution, and coal
            power plants foul the air. Even worse, dirty energy sources
            contribute greatly to global warming.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={EnergyPie} alt="US energy sources" />
          <Cite>
            EIA, US. Frequently Asked Questions (FAQs) - U.S. Energy Information
            Administration (EIA), www.eia.gov/tools/faqs/faq.php?id=427&amp;t=3.{' '}
          </Cite>
        </ContentRight>
      </Container>
      <Parallax bgImage={Turbine} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Narcisa Aciko from Pexels</h5>
        </div>
      </Parallax>
      <SecondContainer style={{ minHeight: '50vh' }}>
        <ContentLeft>
          <h1>Wind Energy</h1>
          <p>
            Wind turbines, another alternative, are surprisingly simple. Unlike
            a fan, where energy is used to make wind, turbines use wind to
            create electricity. According to Energy.gov, “Wind turns the
            propeller-like blades of a turbine around a rotor, which spins a
            generator, which creates electricity.” In order for wind to be a
            viable source of electricity, it requires three concurrent events:
          </p>
          <ul>
            <li>The sun unevenly heating the atmosphere</li>
            <li>Irregularities of the earth's surface</li>
            <li>The rotation of the earth.</li>
          </ul>
          <p>
            Wind energy is a clean, renewable source of energy, and is actually
            one of the most cost effective sources of energy as well. While
            there are some environmental impacts of creating wind turbine farms,
            wind energy does not release any greenhouse gases like it’s dirtier
            counterparts.{' '}
          </p>
        </ContentLeft>
        <ContentRight>
          <img src={HowTurbine} alt="how a wind turbine works" />
          <Cite>
            “How Do Wind Turbines Work?” Renewable Energy Supplier,
            www.goodenergy.co.uk/how-do-wind-turbines-work/.{' '}
          </Cite>
        </ContentRight>
      </SecondContainer>
      <Parallax bgImage={Panel} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Kelly Lacy from Pexels</h5>
        </div>
      </Parallax>
      <Container style={{ minHeight: '50vh' }}>
        <ContentLeft>
          <h1>Solar Energy</h1>
          <p>
            One viable alternative to harmful energy sources is solar energy.
            Humans have been harnessing the sun's energy for thousands and
            thousands of years. Humankind has used the energy of the sun to do
            things like grow crops, stay warm, and even to dry foods. According
            to the National Renewable Energy Laboratory, “more energy from the
            sun falls on the earth in one hour than is used by everyone in the
            world in one year.” Because of this, the sun's energy could be
            harnessed at a mass scale to power peoples homes, to warm water, and
            more. Solar, or photovoltaic, cells are created from silicon or
            other materials that are able to transform sunlight directly into
            electricity. Roof top panels can power individual homes, while solar
            farms can generate power for thousands of homes. As of 2020, solar
            power accounts for a little over 2% of the U.S's energy sources.
            Besides the manufacturing process, solar energy systems do not
            produce air pollutants or greenhouse gases, as long as they are
            responsibly sited.
          </p>
          <Cite>
            June 15, 2018 Lora Shinn. “Renewable Energy: The Clean Facts.” NRDC,
            20 Jan. 2021, www.nrdc.org/stories/renewable-energy-clean-facts.{' '}
          </Cite>
        </ContentLeft>
        <ContentRight>
          <img src={HowSolar} alt="how solar panels work" />
          <Cite>
            Dore, Kate. “How Do Solar Panels Work and Are They Worth It?”
            Ownerly, 14 Oct. 2020,
            www.ownerly.com/home-improvement/how-do-solar-panels-work/.{' '}
          </Cite>
        </ContentRight>
      </Container>
      <Parallax bgImage={Hydro} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Ali Madad Sakhirani from Pexels</h5>
        </div>
      </Parallax>
      <SecondContainer style={{ minHeight: '50vh' }}>
        <ContentLeft>
          <h1>Hydroelectric Energy</h1>
          <p>
            Hydropower is one of the largest renewable sources in the U.S.,
            right behind wind energy. Hydropower relies on fast moving water,
            typically from a fast moving river or rapidly-descending water from
            a high point. From here, hydropower converts the force of water into
            electricity through the use of the generator’s turbines. Many
            consider hydropower to be “nonrenewable”. Mega-dams divert and
            reduce the natural flow of water, which greatly impacts the
            environment and the animals and humans that rely on these natural
            sources of water. Small hydro plants, carefully maintained, are a
            little more environmentally friendly as they only divert small
            portions of water. Despite the possible environmental consequences
            of hydropower, this source of energy still does not release
            greenhouse gases like coal and fracking, a main concern of
            environmentalists.
          </p>
          <Cite>
            June 15, 2018 Lora Shinn. “Renewable Energy: The Clean Facts.” NRDC,
            20 Jan. 2021, www.nrdc.org/stories/renewable-energy-clean-facts.{' '}
          </Cite>
        </ContentLeft>
        <ContentRight>
          <img src={HowHydro} alt="how hydro electric plants work" />
          <Cite>
            Corporativa, Iberdrola. “Do You Know How Hydroelectric Power Plants
            Work?” Iberdrola,
            www.iberdrola.com/environment/what-is-hydroelectric-energy.{' '}
          </Cite>
        </ContentRight>
      </SecondContainer>
      <ScrollTop />
    </>
  );
}
