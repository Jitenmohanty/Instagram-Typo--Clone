import { useUserContext } from "@/context/AuthContext";
import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

type PostStartsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStartsProps) => {

    const like

    const {user} = useUserContext()
    const {mutate:likePost} = useLikePost();
    const {mutate:savePost} = useSavePost();
    const {mutate:deleteSavePost} = useDeleteSavedPost();

    const handleLikePost = ()=>{}
    const handleSavePost = ()=>{}

  return <div className="flex justify-between items-center z-20">
    <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/liked.svg"
          alt="like"
          width={20}
          height={20}
          onClick={likePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
    </div>
    <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/save.svg"
          alt="like"
          width={20}
          height={20}
          onClick={savePost}
          className="cursor-pointer"
        />
    </div>
  </div>;
};

export default PostStats;
