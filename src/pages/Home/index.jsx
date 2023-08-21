import Header from '../../components/Header/';
import { Container, Title, Subtitle, Info, Description, Image, ImageContainer } from './styles';
import jessica from '../../assets/img/jessica-designer.png';

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Info>
                    <Title>Jéssica Amaral</Title>
                    <Subtitle>Designer Gráfico</Subtitle>
                    <Description>
                        Sou designer gráfico focada em Identidade Visual, Posts criativos para as
                        Redes Sociais e Materiais Digitais.
                    </Description>
                    <Description>
                        Acredito que a combinação certa de criatividade, tecnologia e estratégia
                        pode levar quaisquer projetos ao sucesso.
                    </Description>
                </Info>
                <ImageContainer>
                    <Image
                        src={jessica}
                        alt="Foto de Jéssica Amaral"
                    />
                </ImageContainer>
            </Container>
        </>
    );
};

export default Home;
