import mumbai from '.././assets/mumbai.avif';

function Card({item}) {
    return (
    
    <>

            <div className="row d-flex flex-column " style={{
                height:
                    '100%'
            }} >
                <div className="col">
                    <div className="row  " style={{ height: '50%' }}>
                        <div className="col-12 d-flex justify-content-center p-2 ">
                            <img src={item.image} className="img-fluid rounded" alt="..." style={{ width: '100%', height: '85%' }}></img>
                        </div>

                    </div>


                    <div className="row d-flex justify-content-center" style={{ height: '50%' }}>
                        <span><i className="bi bi-geo-alt"></i>{item.city}</span>
                        <span>{item.description}</span>
                        <div className='row d-flex align-items-center ' style={{ width: '100%' }}>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>

                                <i className="fa-solid fa-building "></i>
                                <span >{item.room}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-bed col"></i>
                                <span >{item.beds}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-bath col"></i>
                                <span >{item.bath}</span>
                            </div>

                            <div className='col d-flex flex-column justify-content-center align-items-center'>
                                <i className="fa-solid fa-border-all col"></i>
                                <span >{item.area}</span>
                            </div>


                        </div>
                        <div className='row d-flex align-items-center ' style={{ width: '100%' }}>

                            <div className=" col ">${item.rent}</div>
                            <div className=" col  d-flex justify-content-end">
                                <button type="button" className="btn btn-outline-primary rounded-pill">Read More</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
       

    </>);
}

export default Card;