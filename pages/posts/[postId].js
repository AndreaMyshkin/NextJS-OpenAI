import React from 'react'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function PostId() {
  return (
    <div>This is the PostId [id]</div>
  )
}

export const getServerSideProps = withPageAuthRequired(async () => {
    return {
      props: {},
    };
  });
  