import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const params = useParams();

  return <div>{params.categoryId}</div>;
};

export default CategoryDetail;
