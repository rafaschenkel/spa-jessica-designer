import Header from '../../components/Header/';
import Certificate from '../../components/Certificate';
import { Certificates, Container, Title } from './styles';

const Certications = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>Certificações</Title>
                <Certificates>
                    <Certificate
                        title="Curso Design Gráfico Profissional"
                        school="Hubx"
                        age="2023"
                    />
                    <Certificate
                        title="Curso Especialista em Design Gráfico"
                        school="Udemy"
                        age="2023"
                    />
                    <Certificate
                        title="Workshop Design Gráfico"
                        school="Ebac"
                        age="2023"
                    />
                    <Certificate
                        title="Workshop Social Media Marketing"
                        school="Ebac"
                        age="2023"
                    />
                    <Certificate
                        title="Curso de Criação de Flyers"
                        school="Leon Design"
                        age="2023"
                    />
                </Certificates>
            </Container>
        </>
    );
};

export default Certications;
