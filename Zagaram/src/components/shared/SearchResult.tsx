import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";


type SearchResultsProps = {
  isSearchFetching: boolean;
  searchPosts: Models.Document[];

}


const SearchResult = ({ isSearchFetching, searchPosts }: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />
  //@ts-ignore
  if (searchPosts && searchPosts.documents.length > 0) {
    return (
      //@ts-ignore
      <GridPostList posts={searchPosts.documents}/>
    )
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No Results Found!</p>
  )
}

export default SearchResult