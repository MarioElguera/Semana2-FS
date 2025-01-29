// components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center" style={styles.footer}>
            <p>&copy;Todos los derechos reservados.</p>
        </footer>
    );
};

const styles = {
    footer: {
        width: '100%',
    },
};

export default Footer;
