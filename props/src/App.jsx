import './App.css';

function App(props) {
  // code here
  const imgData = props.data
  return (
    <div>
      <h1>Kalvium gallery</h1>
      <div className="row">
        {
          imgData.map((image)=>{
            return(
              <div className="column"Key={image.id}>
                <img src={image.img} alt="" />
                </div>
            )
          })
        };
      </div>
    </div>
  )
}

export default App;