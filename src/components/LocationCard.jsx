

const LocationCard = ({item}) => {
    const {image,name,contract}=item
    return (
        <div className='bg-[#F3F3F3] pb-12'>
            <button className='btn bg-[#D1A054] w-full '>{image}</button>
            <h1 className='text-2xl font-medium text-[#151515] mt-10'>{name}</h1>
            <p className='text-base font-normal text-[#444444]'>{contract}</p>
            
            
            
        </div>
    );
};

export default LocationCard;