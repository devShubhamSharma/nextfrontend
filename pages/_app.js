import { AppProvider } from '../context/appContext';

export default function App({ Component, pageProps }) {
    return (
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        );
}
//it will fetch all the props on load time of the component
App.getInitialProps = async ({ ctx }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json();
    var numberOfPosts = json.length;
    return {
       post: numberOfPosts 
    }
};
