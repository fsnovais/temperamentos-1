import "./intro.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Intro() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Teste dos temperamentos</h1>
                <img src="assets/intro.png" alt="intro" />
                <div className="home-info">
                EU te vejo, eu te escuto.<br/>
                Vamos juntos rumo ao amadurecimento.
                </div>
                    <Link className="link" to="/recomendations">Descubra agora</Link>
            </div>
            <div className='right'>
                <img src="assets/intro.png" alt="Intro" />
                
            </div>
            </div>
        </div>
    )
}


