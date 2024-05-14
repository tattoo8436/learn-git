import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home">
      <Button type="primary" onClick={() => handleNavigate("/css")}>
        CSS
      </Button>
    </div>
  );
};

export default Home;
