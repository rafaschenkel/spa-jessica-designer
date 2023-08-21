import { Description, Image, ProjectContainer, Images, Title, InfoProject } from './styles';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './styles.css';

const ProjectCarousel = ({ images, title, description }) => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <ProjectContainer>
            <InfoProject>
                {title && <Title>{title}</Title>}
                {description && <Description>{description}</Description>}
            </InfoProject>
            <Images>
                <motion.div
                    ref={carousel}
                    whileTap={{ cursor: 'grabbing' }}
                    className="carousel-carousel"
                >
                    <motion.div
                        className="inner-carousel"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                className="item-carousel"
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

export default ProjectCarousel;
