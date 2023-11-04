import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations"

const LikePost = () => {

  const {data:currentUser} = useGetCurrentUser();

  if (!currentUser)
  return (
    <div className="flex-center w-full h-full">
      <Loader />
    </div>
  );

  return (
    <>
      {
        currentUser.liked.length === 0 && (
          <p className="flex-center w-full h-full">
            No Liked Posts...
          </p>
        )
      } 
      <GridPostList posts={currentUser.liked} showStats={false}/> 
    </>
  )
}

export default LikePost
