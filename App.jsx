import React, { useEffect } from 'react'
import MainNav from './navigation/MainNav'
import RNBootSplash from "react-native-bootsplash";

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 500 });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);
  return (
    <MainNav />
  )
}

export default App