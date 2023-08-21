import { Link, Item, Title, Icon } from './styles';

const ContactItem = ({ icon, linkref, name, link }) => {
    return (
        <Item>
            <Link
                target="_blank"
                href={linkref}
            >
                <Icon>{icon}</Icon>
                <Title>{name}</Title>
                {link}
            </Link>
        </Item>
    );
};

export default ContactItem;
