import './index.scss'


export default function Produtos_lancamentos ({img_produto,titulo_produto, texto_produto,sub_produto, texto_botao,texto_botao2,texto_botao3}) {
    return (
        <div className="produtos-lancamentos">
            <div className="img_produto">
                <img  src={img_produto} alt="" />
            </div>

            <div className="texto_produto">
                <div className="sobre_produto">
                    <p>{texto_produto}</p>
                    <h1>{titulo_produto}</h1>
                    <p>{sub_produto}</p>
                </div>

                <div className="ir_produto">
                        <button className='botao1'>{texto_botao}</button>
                        <button className='botao2'>{texto_botao2}</button>
                        <button className='botao3'>{texto_botao3}</button>
                </div>
            </div>
        </div>
    );
}