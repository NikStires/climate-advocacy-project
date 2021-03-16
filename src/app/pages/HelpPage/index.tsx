import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Container,
  ContentLeft,
  ContentRight,
  SecondContainer,
} from '../../../styles/styles';
import ScrollTop from '../../components/ScrollTop';
import Wave from '../../components/Wave';
import Solar from '../../../img/solar.jpg';

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
          Photo by Gustavo Fring from Pexels
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            reiciendis amet tenetur distinctio sit, nesciunt ea repudiandae
            maiores, itaque illum sed rem incidunt ullam placeat laudantium
            voluptas earum quod error suscipit. Odit maiores suscipit delectus
            unde ullam magni architecto similique libero ut fugit sequi officiis
            autem explicabo ipsam nisi fugiat, ex saepe obcaecati velit itaque
            accusantium. Totam ratione nesciunt aliquam numquam, similique
            expedita aperiam illo impedit officiis quidem fugit ipsa quo minima
            ut sapiente atque vero recusandae. Architecto minus, mollitia dolor
            natus ipsa maxime eum animi sapiente et repellat vitae placeat?
            Similique debitis delectus consequatur! Odit eos doloremque sequi
            dolor!
          </p>
        </ContentLeft>
      </SecondContainer>
      <ScrollTop />
    </>
  );
}
