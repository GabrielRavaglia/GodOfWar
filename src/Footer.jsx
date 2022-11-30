import './Footer.css';

function Footer(){

    return(
        <div className='footer'>
            <div className='footercima'>
                <img src='./src/imagens/logoGodofWa2018.png'></img>
                <div className='cimaesquerda'>
                <p>Dev: Gabriel Raváglia Santos</p>
                <p>Projeto Landing Page God Of War</p>
                </div>
            </div>

            <div className='footerbaixo'>
            <img src='./src/imagens/SENA.png'></img>
            <img src='./src/imagens/rpv.png'></img>
            </div>
        </div>
    )
}

export default Footer