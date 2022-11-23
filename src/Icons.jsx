import './Icons.css'

function Icons(){
    
    return(

        <div className='icons'>
            <div className='icon1'>
            <img src='./src/imagens/jogo-offline.png'></img>
            <p>Jogo offline habilitado</p>
            </div>
            <div className='icon1'>
            <img src='./src/imagens/account.png'></img>
            <p>1 Jogador</p>
            </div>
            <div className='icon2'>
            <img src='./src/imagens/remote.png'></img>
            <p>Compátivel com uso remoto</p>
            </div>
            <div className='icon3'>
            <img src='./src/imagens/efeito.png'></img>
            <p>Efeito no gatilho</p>
            </div>
            
        </div>  
        
    )
}

export default Icons