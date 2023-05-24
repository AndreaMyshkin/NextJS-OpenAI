import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";

export default function Success() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto">
      <h1>Thank you for your order</h1>
    
    </div>
  );
}


Success.getLayout = function getLayout(page, pageProps) {
  return (
    <AppLayout {...pageProps}>
      {page}
    </AppLayout>
  );
}
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const props = await getAppProps(context)
    return {
      props
    
    }
  }
});
