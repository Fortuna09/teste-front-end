import partnerImage from '../../assets/pictures/partner.png';
import './Partners.scss';

interface Partner {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PARTNERS_DATA: Partner[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Lorem dolor sit amet, consectetur.',
    image: partnerImage,
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Lorem dolor sit amet, consectetur.',
    image: partnerImage,
  },
];

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container">
        {PARTNERS_DATA.map((partner) => (
          <div key={partner.id} className="partners__card">
            <img 
              src={partner.image} 
              alt={partner.title} 
              className="partners__image"
            />
            <div className="partners__overlay">
              <h3 className="partners__title">{partner.title}</h3>
              <p className="partners__text">{partner.description}</p>
              <button className="partners__button">CONFIRA</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
