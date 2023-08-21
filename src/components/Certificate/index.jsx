import { CerticateContainer, Title, Info, Hr, TitleContainer } from './styles';
import { MdSchool } from 'react-icons/md';

const Certificate = ({ title, school, age }) => {
    return (
        <CerticateContainer>
            <TitleContainer>
                <MdSchool size={20} />
                <Title>{title}</Title>
            </TitleContainer>
            <Info>
                {school} - {age}
            </Info>
            <Hr />
        </CerticateContainer>
    );
};

export default Certificate;
