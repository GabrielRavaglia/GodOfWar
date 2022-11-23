import './Header.css'

function Header(){

    return(

        <div className='header'>
            <div className='center'>
            
            <div className='logo'><img src='./src/imagens/logoplaystation.png'/></div>
            <div className='logo2'><img src='./src/imagens/LogoGodofWa2018.png'/></div>
            <div className='plataformas'>
                <span className='textplataformas'>Disponível para:</span>
                <span className='plataforma'>PS4</span>
                <span className='plataforma'>PS5</span>                
                <span className='plataforma'>PC</span>                
            </div>
            </div>
        </div>






    )
}

export default Header