import Header from "../Components/Header";
import Catalogue from "../Components/Catalogue";

export default function Home() {
  return (
      <div className="flex flex-col">
        <Header/>
          <Catalogue />
      </div>
  )
}
