import myPic from '../Images/Sid.jpg';


export default function Card() {
  return (
    <center>
      <div className="card my-5" style={{width: "18rem"}}>
      <h1>Project</h1>
      <img src={myPic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </center>
  );
}


const data=[
  {
    id:'1',
    image:myPic,
    title:"Portfolio",
    cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit Itaque temporibus sit consequatur provident eveniet sed earum vel sapiente voluptate accusamus",
  },
  {
    id:'2',
    image:myPic,
    title:"Portfolio",
    cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit Itaque temporibus sit consequatur provident eveniet sed earum vel sapiente voluptate accusamus",
  },

]