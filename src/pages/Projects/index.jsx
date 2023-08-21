import Header from '../../components/Header/';
import { Container, Title } from './styles';
import Project from '../../components/Project';
import ProjectCarousel from '../../components/ProjectCarousel';
import ProjectInstagram from '../../components/ProjectInstagram';

import images from '../../json/db.json';
const betinaMockups = images.betina.mockups.map(({ url }) => url);
const betinaCarousel = images.betina.carousels.map(({ url }) => url);
const betinaPosts = images.betina.posts.map(({ url }) => url);
const marianeMockups = images.mariane.mockups.map(({ url }) => url);

const Projects = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>Projetos</Title>
                <Project
                    title="Betina Schmidt - Psicóloga"
                    images={betinaMockups}
                />
                <Project
                    title="Mariane Mueller - Arquitetura e Interiores"
                    images={marianeMockups}
                />
                <ProjectCarousel
                    title="Carrossel para Instagram"
                    images={betinaCarousel}
                />
                <ProjectInstagram
                    title="Posts para Instagram"
                    images={betinaPosts}
                />
            </Container>
        </>
    );
};

export default Projects;
