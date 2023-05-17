import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {Nanum_Pen_Script, Open_Sans} from '@next/font/google';


const nanum = Nanum_Pen_Script({ 
    weight: ['400'],
    subsets: ['latin'],
    variable: "--font-nanum"
})


const openSans = Open_Sans({ 
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-openSans"
})

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);


  return (
    <UserProvider>
      <main className={`${nanum.variable} ${openSans.variable} font-body`}>
      {getLayout(<Component {...pageProps} />,  pageProps)}
      </main>

    </UserProvider>
  );
}

export default MyApp;
