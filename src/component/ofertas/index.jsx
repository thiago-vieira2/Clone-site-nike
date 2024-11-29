import './index.scss';
import logo from '../../assets/logo.svg';

export default function Ofertas({ text_tipo }) {
  return (
    <div className="Tenis_ofertas">
      <h2>{text_tipo}</h2>
      <img src={logo} alt="Logo" />
    </div>
  );
}