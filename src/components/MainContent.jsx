import React from 'react';
import ImageComponent from './imageComponent';



const MainContent = (props) => {
  
    return (
    <div className="container text-white">
    <div className="bg-light">
      <h1 className="mt-5">{props.title}</h1>
      <p className="lead">{props.description}</p>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 mb-4">
        <div className="card">
        <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo </h5> 
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
        <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo </h5>
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
       <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo </h5>
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
       <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo </h5>
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
       <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo </h5>
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
       <ImageComponent src= "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={Image.alt} width={Image.width}/>
          <div className="card-body">
            <h5 className="card-title">Titolo</h5>
            <p className="card-text">Contenuto...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default MainContent;
