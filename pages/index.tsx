import Navbar from "@/components/Navbar";
import { NextPageContext } from "next"
import {getSession} from "next-auth/react";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorite from "@/hooks/useFavorite";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

 
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanet: false
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorite()
  const {isOpen, closeModal} = useInfoModal()
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar />
      <Billboard />
      <div className="pb-48 ">


      <MovieList   title="Trending Now" data={movies}/>
      <MovieList   title="My List" data={favorites}/>

      </div>
    </>
  )
}
