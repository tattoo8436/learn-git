import "./styles.css";

const CSS = () => {
  return (
    <div className="css">
      <h1 className="css__title">CSS</h1>

      <div className="css__content">
        {/* accent-color */}
        <input type="checkbox" className="css__input" />
        <input type="radio" className="css__input" />

        <div className="container">
          <div className="image">
            <img
              width={150}
              height={150}
              src="https://www.giaonhan247.com/wp-content/uploads/2021/12/Songoku-huyen-thoai.jpg"
            />
          </div>

          <div className="display">
            <div className="display__child child1">123</div>
            <div className="display__child">456</div>
            <div className="display__child">789</div>
          </div>

          <div className="float">
            <strong> Hello world </strong>
            <span>!</span>
          </div>

          <div className="grid">
            <div className="grid__item item1">1</div>
            <div className="grid__item item2">2</div>
            <div className="grid__item">3</div>
            <div className="grid__item">4</div>
          </div>

          {/* <div className="animation"></div> */}

          <div className="position">
            <div className="position1">
              <div>Something</div>
              <div className="header">Header</div>
              <div className="footer">Footer</div>
            </div>
          </div>

          <svg className="draw">
            <path d="M150 0 L0 150" stroke="red" strokeWidth={4} />
            <path d="M0 150 C150 200" stroke="red" strokeWidth={4} />
            <path d="M150 0 L0 150" stroke="red" strokeWidth={4} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CSS;
