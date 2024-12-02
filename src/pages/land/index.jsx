import './index.scss'
import Black from '../../assets/bannerblack.jpg'
import Ofertas from '../../component/ofertas';
import { useState } from 'react';
import Chuteira from '../../assets/produtos/download.png'
import Produtos_lancamentos from '../../component/produtos_lancamento';
import Fitness_product from '../../assets/produtos/download1.avif'

export default function Land() {

    //img_produto,titulo_produto, texto_produto,sub_produto, texto_botao,texto_botao2,texto_botao3

    const  [lancamentos, setLancamentos] = useState([
        {
            id: 1,
            img_produto: Chuteira,
            titulo_produto: 'Mercurial Cosmic  Speed',
            sub_produto : 'Mais velocidade , mais estilo',
            texto_botao : 'Ver Lançamento',
        },

        {
            id: 2,
            img_produto: Fitness_product,
            titulo_produto: 'Mercurial Cosmic  Speed',
            sub_produto : 'Mais velocidade , mais estilo',
            texto_botao : 'Ver Lançamento',
            texto_botao2 : 'Free Metcon 6',
            texto_botao3: 'Saiba Mais'
        }
    ])


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

                <div className="ofertas_disponiveis">

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

            <div className="produtos_lancamentos">
                <div className="produto_em_si">
                    {lancamentos.map ((item,index) => {
                        return (
                            <div className="lancamentoproduto">
                                <Produtos_lancamentos key={item.id} img_produto={item.img_produto} texto_botao={item.texto_botao} texto_botao2={item.texto_botao2} texto_botao3={item.texto_botao3}/>
                            </div>
                        );
                    })}
                </div>  
            </div>

        </div>
    );

}