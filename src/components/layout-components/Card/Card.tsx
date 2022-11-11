import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="box">
        <img src="1.png" alt="elmer" />
        <div className="badge-wrapper">
          <span className="chip primary">Rainbow</span>
          <span className="chip primary">Elephant</span>
          <span className="chip primary">Patchwork</span>
        </div>
        <p>Helloe my name is elmer the elephant, i am a very happy</p>
        <a href="https://github.com/ydainna" target="_blank">
          <button className="btn">Github</button>
        </a>
        <a href="">
          <button className="btn btn-disabled">Website</button>
        </a>
      </div>
    </div>
)}

export default Card;