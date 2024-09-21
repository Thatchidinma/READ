import image1 from '../images/img2.jpg'
const Hero = () => {
  return (
    <div>
      <div className='m-2 p-4 flex justify-center'>
        <div className='flex h-[500px]'>
          <img src={image1} alt="" className="" />
        </div>
      </div>

      <p className='text-center text-xl sm:text-3xl italic text-gray-600'>Hello dear readers, ready to explore the world of books??? <br /> Alright then search up a book now</p>
    </div>
  )
}

export default Hero
