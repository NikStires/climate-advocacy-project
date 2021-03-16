import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  ContentLeft,
  SecondContainer,
} from '../../../styles/styles';
import { Parallax } from 'react-parallax';
import ScrollTop from '../../components/ScrollTop';

import Turbine from '../../../img/turbine.jpg';
import Panel from '../../../img/panels.jpg';
import Hydro from '../../../img/hydro.jpg';

export function EnergyPage() {
  return (
    <>
      <Helmet>
        <title>Energy Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container style={{ minHeight: '50vh' }}>
        <ContentLeft>
          <h1>ENERGY PAGE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            distinctio quod, eveniet libero animi eaque, asperiores, minus alias
            ducimus incidunt fugiat soluta cupiditate sunt hic dicta sed
            placeat. Sunt ab illo doloremque nulla quaerat ipsum. Corrupti,
            autem nesciunt corporis aliquid hic ducimus deserunt quisquam ullam
            doloremque, quasi sunt exercitationem assumenda?
          </p>
        </ContentLeft>
      </Container>
      <Parallax bgImage={Turbine} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Narcisa Aciko from Pexels</h5>
        </div>
      </Parallax>
      <SecondContainer style={{ minHeight: '50vh' }}>
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
      <Parallax bgImage={Panel} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Kelly Lacy from Pexels</h5>
        </div>
      </Parallax>
      <Container style={{ minHeight: '50vh' }}>
        <ContentLeft>
          <h1>ENERGY PAGE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            distinctio quod, eveniet libero animi eaque, asperiores, minus alias
            ducimus incidunt fugiat soluta cupiditate sunt hic dicta sed
            placeat. Sunt ab illo doloremque nulla quaerat ipsum. Corrupti,
            autem nesciunt corporis aliquid hic ducimus deserunt quisquam ullam
            doloremque, quasi sunt exercitationem assumenda?
          </p>
        </ContentLeft>
      </Container>
      <Parallax bgImage={Hydro} strength={500}>
        <div style={{ height: 500 }}>
          <h5>Photo by Ali Madad Sakhirani from Pexels</h5>
        </div>
      </Parallax>
      <SecondContainer style={{ minHeight: '50vh' }}>
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
