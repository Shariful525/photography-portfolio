import React from 'react';



const Carousel = () => {
    return (
        <div className='w-full z-10'>
            <div className="carousel w-full gap-10 mt-[80px]">
                <div id="slide1" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px] ">
                    <img src="https://images.pexels.com/photos/10034617/pexels-photo-10034617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>
                <div id="slide2" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
                    <img src="https://images.pexels.com/photos/17887967/pexels-photo-17887967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>
                <div id="slide3" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
                    <img src="https://images.pexels.com/photos/9336369/pexels-photo-9336369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>
                <div id="slide4" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
                    <img src="https://images.pexels.com/photos/12043012/pexels-photo-12043012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>
                <div id="slide5" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
                    <img src="https://images.pexels.com/photos/17586062/pexels-photo-17586062/free-photo-of-blossoming-houseplants-on-house-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>
                <div id="slide6" className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
                    <img src="https://images.pexels.com/photos/17910786/pexels-photo-17910786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]" />

                </div>


            </div>
            <div className='flex justify-center gap-5 mt-10'>
                <a className="btn btn-outline btn-info" href='#slide6'>Prev</a>
                <a className="btn btn-outline btn-success" href='#slide5' >Next</a>
            </div>
        </div>

    );
};

export default Carousel;