import { Image, ProjectContainer, Images, Title, InfoProject, Subtitle } from './styles';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './styles.css';

const Project = ({ images, title }) => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <ProjectContainer>
            <Title>Criação de Identidade Visual</Title>
            <InfoProject>{title && <Subtitle>{title}</Subtitle>}</InfoProject>
            <Images>
                <motion.div
                    ref={carousel}
                    whileTap={{ cursor: 'grabbing' }}
                    className="carousel-project"
                >
                    <motion.div
                        className="inner-project"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                className="item-project"
                                key={index}
                            >
                                <Image
                                    src={image}
                                    alt={image}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Images>
        </ProjectContainer>
    );
};

export default Project;
