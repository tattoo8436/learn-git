import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home">
      <Space>
        <Button type="primary" onClick={() => handleNavigate("/css")}>
          CSS
        </Button>

        <Button type="primary" onClick={() => handleNavigate("/git")}>
          Git
        </Button>

        <Button type="primary" onClick={() => handleNavigate("/react")}>
          React
        </Button>
      </Space>
    </div>
  );
};

export default Home;
