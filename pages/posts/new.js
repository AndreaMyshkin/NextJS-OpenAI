import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";
import { useState } from "react";
export default function NewPost() {
  const [postContent, setPostContent] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/generatePost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keywords, topic }),
    });
    const json = await response.json();
    setPostContent(json.post.postContent);
  };
  
  return (
    <div>
      <form type="submit" onSubmit={handleClick}>
        <div>
          <label>
            <strong>Generate a blogpost on the topic of:</strong>
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="resize-none border border-slate-500 w-full p-2 block my-2 px-4 py-2 rounded-sm"
          />
        </div>
        <div>
          <label>
            <strong>Targeting the following keywords</strong>
          </label>
          <textarea
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="resize-none border border-slate-500 w-full p-2 block my-2 px-4 py-2 rounded-sm"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Generate"
            className="btn"
            onClick={handleClick}
          />
        </div>
      </form>
      <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
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
