import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'fill !important' }}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/flat-lay-hamburger-with-popcorn_23-2148258512.jpg?w=996&t=st=1680586837~exp=1680587437~hmac=1051319302276f42a5c986486aca0fd005ccb092302e0ed6219b23c8eb330514" className="d-block w-100 " style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/view-indian-food-arrangement_23-2148747716.jpg?w=996&t=st=1680590796~exp=1680591396~hmac=e6754a3e4844faf229e2c6adaabe7ff851aad6b6777e871630f9e85dab557181" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/pasta-dish-restaurant-table_7939-2459.jpg?w=1060&t=st=1680586977~exp=1680587577~hmac=0476b530eaa34364c4e60723779a44d3da4dbd927b79ce7bf06ab0a2720044d8" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/duck-meat-inside-spring-roll_74190-6269.jpg?w=996&t=st=1680590990~exp=1680591590~hmac=a13094af8de1e76457e2d5a2c4ef0dcb3bb25e230202c7b704bd06bc350ce154" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/ice-cream-cone-stand_169016-6345.jpg?w=1380&t=st=1680591199~exp=1680591799~hmac=d53b374959f600e53bd91a1eacb63fbb9173722345df0cab97bcd9abc9ac404b" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/big-fast-food-composition_23-2147695685.jpg?size=626&ext=jpg&ga=GA1.2.1266727083.1643287377&semt=ais" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/side-view-gurza-fried-lamb-dumplings-with-onion-salt-pepper-plate_141793-4949.jpg?w=996&t=st=1680591288~exp=1680591888~hmac=dcf98191cf3da3adb0be006c8cd4b3d23e4fe2a31e1a7742f007c3d21a3e3f2e" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://as2.ftcdn.net/v2/jpg/01/89/78/15/1000_F_189781543_EpHDnqryinw4fBlU1L3L0YgLdYUxedfi.jpg" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://t4.ftcdn.net/jpg/03/57/69/39/240_F_357693925_9TiscSXGb8icBmOiet1V40vEurXc0SRz.jpg" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/indian-meal-with-pita-rice_23-2148747625.jpg?w=996&t=st=1680589614~exp=1680590214~hmac=bb23dd9f6077fb5838ec951f3c6e1081b854c057cfaeaf66ecb6c1bf8021cc9b" className="d-block w-100" style={{ filter: "brightness(50%" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}