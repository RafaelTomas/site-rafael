import React from 'react';
import { Icon } from '@chakra-ui/react';
import { SiJavascript, SiNodedotjs, SiReact, SiTypescript, SiMysql, SiMongodb, SiNextdotjs, SiGit } from 'react-icons/si';
import Slider from 'react-slick';

function Skills(){
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div>
      <h2> Minhas Skills </h2>
      <Slider {...settings}>
        <div>
          <Icon as={SiJavascript} w={32} h={32}/>
        </div>
        <div>
          <Icon as={SiNodedotjs} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiReact} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiTypescript} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiMysql} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiMongodb} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiGit} w={32} h={32} />
        </div>
        <div>
          <Icon as={SiNextdotjs} w={32} h={32} />
        </div>
      </Slider>
    </div>
  );
}

export default Skills;