import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const params = useParams();
  console.log(params.categoryId);

  return <div>{params.categoryId}</div>;
};

export default CategoryDetail;
