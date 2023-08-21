import Header from '../../components/Header/';
import { Container, Title } from './styles';
import Project from '../../components/Project';
import ProjectCarousel from '../../components/ProjectCarousel';
import ProjectInstagram from '../../components/ProjectInstagram';

import betina from '../../assets/img/project-betina/project-betina-0-min.png';
import betina1 from '../../assets/img/project-betina/project-betina-1-min.png';
import betina2 from '../../assets/img/project-betina/project-betina-2-min.png';
import betina3 from '../../assets/img/project-betina/project-betina-3-min.png';
import betina4 from '../../assets/img/project-betina/project-betina-4-min.png';
import betina5 from '../../assets/img/project-betina/project-betina-5-min.png';
import betina6 from '../../assets/img/project-betina/project-betina-6-min.png';
const imagesProjectBetina = [betina, betina1, betina2, betina3, betina4, betina5, betina6];

import mariane from '../../assets/img/project-mariane/project-mariane-0-min.png';
import mariane1 from '../../assets/img/project-mariane/project-mariane-1-min.png';
import mariane2 from '../../assets/img/project-mariane/project-mariane-2-min.png';
import mariane3 from '../../assets/img/project-mariane/project-mariane-3-min.png';
import mariane4 from '../../assets/img/project-mariane/project-mariane-4-min.png';
const imagesProjectMariane = [mariane, mariane1, mariane2, mariane3, mariane4];

import betinaCarousel1 from '../../assets/img/project-betina/carousel-1.png';
import betinaCarousel2 from '../../assets/img/project-betina/carousel-2.png';
import betinaCarousel3 from '../../assets/img/project-betina/carousel-3.png';
import betinaCarousel4 from '../../assets/img/project-betina/carousel-4.png';
import betinaCarousel5 from '../../assets/img/project-betina/carousel-5.png';
import betinaCarousel6 from '../../assets/img/project-betina/carousel-6.png';

const imagesCarouselBetina = [
    betinaCarousel1,
    betinaCarousel2,
    betinaCarousel3,
    betinaCarousel4,
    betinaCarousel5,
    betinaCarousel6
];

import betinaInstagram1 from '../../assets/img/project-betina/betina-instagram1-min.png';
import betinaInstagram2 from '../../assets/img/project-betina/betina-instagram2-min.png';
import betinaInstagram3 from '../../assets/img/project-betina/betina-instagram3-min.png';

const imagesInstagramBetina = [betinaInstagram1, betinaInstagram2, betinaInstagram3];

const Projects = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>Projetos</Title>
                <Project
                    title="Betina Schmidt - Psicóloga"
                    images={imagesProjectBetina}
                />
                <Project
                    title="Mariane Mueller - Arquitetura e Interiores"
                    images={imagesProjectMariane}
                />
                <ProjectCarousel
                    title="Carrossel para Instagram"
                    images={imagesCarouselBetina}
                />
                <ProjectInstagram
                    title="Posts para Instagram"
                    images={imagesInstagramBetina}
                />
            </Container>
        </>
    );
};

export default Projects;
