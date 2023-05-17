import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";
import { useState } from "react";
export default function NewPost() {
  const [postContent, setPostContent] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/generatePost", {
      method: "POST",
    });
    const json = await response.json();
    setPostContent(json.post.postContent)

    console.log({ json });
  };
  return (
    <div>
      <h1>Generate New Post</h1>
      <div dangerouslySetInnerHTML={{ __html: postContent }}></div>

      <button className="btn max-w-[200px] my-3" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
export const getServerSideProps = withPageAuthRequired(async () => {
  return {
    props: {},
  };
});
