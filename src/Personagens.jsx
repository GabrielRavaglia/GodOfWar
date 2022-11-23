import "./Personagens.css"

function Person(){

    return(
        <div className='Person'>
            <div className='person_tittle'>     
            <h1>PESONAGENS PRINCIPAIS</h1>        
            </div>
            <div className='Persons'>
                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/kratos.png"></img>                
                <h2>O bão de guerra</h2>
                </div>
                
                       
                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/atreus.png"></img>                
                <h2>Joven revolts</h2>
                </div>

                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/freya.png"></img>                
                <h2>Mãe maluca</h2>
                </div> 

                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/sindri.png"></img>                
                <h2>Anão com toque</h2>
                </div> 

                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/brok.png"></img>                
                <h2>Anão engraçado e azul</h2>
                </div> 

                <div className="imgbox">
                <img className="personsimg" src="./src/imagens/personagens/mimir.png"></img>                
                <h2>O sabe tudo</h2>
                </div>
                </div>   
                
        </div>
       
    )
}

export default Person