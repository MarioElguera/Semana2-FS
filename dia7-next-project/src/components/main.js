import Calculator from "../components/calculator";
import BotonClick from '../components/botonConsola';
import LocalizadorIP from '../components/ipidentifier';

const Main = () => {
    return (
        <main style={styles.main}>
            <BotonClick />
            <br></br>
            <br></br>
            <br></br>
            <LocalizadorIP />
            <br></br>
            <br></br>
            <br></br>
            <h1>CALCULADORA</h1>
            <Calculator />
        </main>
    );
};

const styles = {
    main: {
        padding: '2rem',
        backgroundColor: 'black',
        textAlign: 'center',
    }
};

export default Main;
