
import Navbar from '../components/Fragments/Navbar'

const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className='flex flex-row w-full justify-between'>
            <h1>Home</h1>
            {/* <div className="bg-black h-60 w-60"></div>
            <div className="bg-black h-60 w-60"></div> */}
        </div>
    </>
  )
}

export default Home