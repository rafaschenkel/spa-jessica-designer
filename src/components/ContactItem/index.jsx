import { Link, Item, Title, Icon } from './styles';

const ContactItem = ({ icon, linkref, name, link }) => {
    return (
        <Item>
            <Icon>{icon}</Icon>
            <Title>{name}</Title>
            <Link
                target="_blank"
                href={linkref}
            >
                {link}
            </Link>
        </Item>
    );
};

export default ContactItem;
