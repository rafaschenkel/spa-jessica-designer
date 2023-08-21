import Header from '../../components/Header/';
import { Container, ListContactItems, Title } from './styles';
import ContactItem from '../../components/ContactItem';
import { BsWhatsapp, BsBehance, BsInstagram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>Contato</Title>
                <ListContactItems>
                    <ContactItem
                        icon={
                            <BsWhatsapp
                                size={80}
                                color="#72008f"
                            />
                        }
                        linkref="https://api.whatsapp.com/message/FDIBQ2HA45HGE1"
                        name="Telefone / WhatsApp"
                        link="(51) 9 8914-5341"
                    />
                    <ContactItem
                        icon={
                            <MdOutlineEmail
                                size={80}
                                color="#72008f"
                            />
                        }
                        linkref="mailto:jessicaluana.luana7@gmail.com.br"
                        name="Email"
                        link="jessicaluana.luana7@gmail.com"
                    />
                    <ContactItem
                        icon={
                            <BsBehance
                                size={80}
                                color="#72008f"
                            />
                        }
                        linkref="http://behance.net/jessicaluana8"
                        name="Behance"
                        link="behance.net/jessicaluana8"
                    />
                    <ContactItem
                        icon={
                            <BsInstagram
                                size={80}
                                color="#72008f"
                            />
                        }
                        linkref="http://instagram.com/jessicaamaral.design"
                        name="Instagram"
                        link="@jessicaamaral.design"
                    />
                </ListContactItems>
            </Container>
        </>
    );
};

export default Contact;
