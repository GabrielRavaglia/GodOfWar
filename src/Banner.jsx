import './Banner.css'

function Meio(){

    
    function AbrirCriarconta(e){
        e.preventDefault();

        let modal = document.querySelector('.criarconta');
        modal.style.display = "block";
        
    }

    function fecharmodalcriar(){
        let modal = document.querySelector('.criarconta')
        modal.style.display = "none";

    }

    return(

        

        <div className='meio'>
            <div className='banner_left'>
                <h1>Lançamento: 20/04/2018</h1>
                <h2>GOD OF WAR</h2>
                <h3>Klaton é pai novamente. Como mentor e protetor de Mateus,<br/> um filho determinado a ganhar seu respeito, ele é forçado a <br/>encarar e controlar a fúria que há muito tempo o define<br/> enquanto viaja por um mundo ameaçador com o seu filho.</h3>
                <div className='store'>   
                <div className='price'><p>R$ 199,90</p></div>
                <a className='buy' href="https://www.w3schools.com" onClick={(e)=>AbrirCriarconta(e)}><p>Comprar agora</p></a>   
                </div>  
            </div>

            <div className='criarconta'>
                        
                        <form onSubmit={(e)=>CriarConta(e)}>
                        <div onClick={()=>fecharmodalcriar()} className='botaosaircriarconta'>X
                        </div>                            
                            <h1>Escolha a plataforma desejada:</h1>
                            <a className='buy' target="_blank" href="https://store.playstation.com/pt-br/product/UP9000-CUSA07408_00-00000000GODOFWAR"><p>PS4 ou PS5</p></a>  
                            <a className='buy' target="_blank"  href="https://store.steampowered.com/app/1593500/God_of_War/" ><p>PC</p></a>  
                         </form>
            </div>

            <div className='banner_right'>
                <p className='trailer'>ASSISTA O TRAILER</p>
                <video className='trailerjogo' width="350" height="200" controls>
                    <source src="./src/videos/trailer1.mp4" type='video/mp4'></source>                    
                        
                </video>
                <div className='n18'>
                    <img src='./src/imagens/numero-18.png'></img>
                    <p>Drogas Lícitas, Linguagem Imprópria e<br/>
                    Violência Extrema
                    </p>
                </div>
            
            </div>

        </div>





    )
}

export default Meio