import { Link } from 'react-router-dom';
import { Container, Nav } from './styles';

const Header = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/certifications">Certificações</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contact">Contato</Link>
            </Nav>
        </Container>
    );
};

export default Header;
