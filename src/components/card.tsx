export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <div className="mb-20 text-justify">
      <h4 className="text-2xl">{title}</h4>
      <p>Location: {location}</p>
      <p>Country: {country}</p>
      <p>Type: {property_type}</p>
      <p>Description: {description}</p>
      <p>Bedrooms: {bedroom_count}</p>
      <p>Bathrooms: {bathroom_count}</p>
      <p>Price: {price}</p>
      <img src={image_urls[0]} />
    </div>
  );
};
