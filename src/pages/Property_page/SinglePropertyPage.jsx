// CardPropertyPage.js
import React from 'react';
import { useSelector } from 'react-redux';

function SinglePropertyPage() {
  const selectedCard = useSelector(state => state.card.selectedCard);

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
  <>
  <div className='d-flex justify-content-center align-items-center'>
  <div className="col col-sm-6 col-lg-3 rounded box-shadow-1" style={{ height: '500px' }}>
   <div className="row d-flex flex-column " style={{
                height:
                    '100%'
            }} >
                <div className="col">
                    <div className="row  " style={{ height: '50%' }}>
                        <div className="col-12 d-flex justify-content-center p-2 ">
                            <img src={selectedCard.image} className="img-fluid rounded" alt="..." style={{ width: '85%', height: '85%' }}></img>
                        </div>

                    </div>


                    <div className="row p-4 d-flex justify-content-center" style={{ height: '50%' }}>
                        <span><i className="bi bi-geo-alt"></i>{selectedCard.city}</span>
                        <span>{selectedCard.description}</span>
                        <div className='row d-flex align-items-center ' style={{ width: '100%' }}>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>

                                <i className="fa-solid fa-building "></i>
                                <span >{selectedCard.room}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-bed col"></i>
                                <span >{selectedCard.beds}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-bath col"></i>
                                <span >{selectedCard.bath}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-border-all col"></i>
                                <span >{selectedCard.area}</span>
                            </div>


                        </div>
                        <div className='row d-flex align-items-center ' style={{ width: '100%' }}>

                            <div className=" col ">${selectedCard.rent}</div>
                            <div className=" col  d-flex justify-content-end">
                                <button type="button" className="btn btn-outline-primary rounded-pill">Read More</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            </div>
            </div>
  </>
  );
}

export default SinglePropertyPage;
