import './index.scss';
import logo from '../../assets/logo.svg';

export default function Ofertas({ text_tipo }) {
  return (
    <div className="Tenis_ofertas">

      <div className="texto">
        <h1>{text_tipo}</h1>
      </div>
      

      <div className="logos">
      <img src={logo} alt="Logo" />
      </div>
   
    </div>
  );
}