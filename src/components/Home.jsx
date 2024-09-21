import Card from "./Card"
import Hero from "./Hero"
import Search from "./Search"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Search/>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 m-4 lg:mx-24 gap-5 lg:gap-x-20">
      <Card/>
      </div>
    </div>
  )
}

export default Home
