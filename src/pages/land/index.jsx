import './index.scss'
import Black from '../../assets/bannerblack.jpg'
import Ofertas from '../../component/ofertas';
import { useState } from 'react';

export default function Land() {


    const [ofertass, setOfertass] = useState([
        {
            id: 1,
            text_tipo: "Tênis de Corrida"
        }, 

        {
            id: 2,
            text_tipo: "Tênis de Treino"
        }, 

        {
            id: 1,
            text_tipo: "Chuteiras"
        }, 
    ]);

    console.log(ofertass);
    

    return (




        <div className="mae">


            <div className="ofertas">

                <div className="banner_conteiner">
                    <a href=""><img src={Black} alt="Banner" /></a>
                </div>

                <h3>Garanta as melhores ofertas da Black Friday Nike com ate 70% de desconto</h3>

                <div className="botoes_de_ofertas">
                    <a className='Saiba_Mais' href="">Saiba Mais</a>
                    <a className='Ver_ofertas' href="">Ver Todas as Ofertas </a>
                </div>



            </div>

            <div className="Melhores_Ofertas">
                <h1> Melhores Ofertas</h1>

                {ofertass.map ((item,index) => {

                    return (
                        <div key={index} className="ofertas_renderizadas">
                             <Ofertas key={item.id} text_tipo={item.text_tipo} />
                             {console.log(ofertass)}
                        </div>
                    );
                  

                })}


            </div>

        </div>
    );

}