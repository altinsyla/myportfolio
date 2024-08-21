import React from 'react';
import '../Projects/Projects.scss';
import '../../../src/_styles.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import internnexus from '../../images/internnexus.png';
import github from '../../images/github.svg';

function Projects() {
  return (
    <div className='projects-container'>
      <h1 style={{ fontFamily: "lato-regular" }}>Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="project-slide">
            <div className="image-container">
              <img src={internnexus} alt="Project Image" className="project-image" />
              <div className="overlay">
                <div className="description">
                InternNexus is a platform that aims to help students finding new Internships in different Kosovo Companies.
                </div>
              </div>
            </div>
            <h2 className="project-title">InternNexus</h2>
            <a href="https://github.com/altinsyla/InternNexus" target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={github} alt='github-icon' className='projects-icons'/>
              </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects;
