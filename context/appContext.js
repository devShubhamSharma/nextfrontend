import React, {createContext }from 'react';
import { useState } from 'react';

let AppContext = createContext({
    user: "Danish",
    posts: 0,
    setPosts: (posts)=>{}
});

function AppProvider(props){
    const [ posts, setPosts ] = useState(0);

    return(
        <AppContext.Provider value={{user: "Mohd Danish", posts: posts, setPosts: setPosts}}>
          {props.children}
        </AppContext.Provider>
    )
}


export {AppProvider, AppContext};