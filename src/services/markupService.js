export const createMarkupAll = arr => {
  return arr
    .map(({ title, thumbnail, price, description }) => {
      return `<li>
        <img src="${thumbnail}" alt="" />
        <h3>Title:${title}</h3>
        <p>Description:${description}</p>
        <p>Price:${price}</p>
      </li>`;
    })
    .join('');
};

export const createMarkupSingleProduct = ({
  title,
  thumbnail,
  price,
  description,
}) => {
  return `<div>
        <img src="${thumbnail}" alt="" />
        <h3>Title:${title}</h3>
        <p>Description:${description}</p>
        <p>Price:${price}</p>
      </div>`;
};
export const createMarkupProduct = ({ title, description, price }) => `<div>
        <h3>Title:${title}</h3>
        <p>Description:${description}</p>
        <p>Price:${price}</p>
      </div>`;

