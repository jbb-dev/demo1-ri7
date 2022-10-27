import React from 'react'
import { useState } from 'react'

const Home = () => {

    const [show, setShow] = useState(false);

    const appear = () => setShow(!show);

    return (
        <div>
            <button onClick={appear}>Change</button>
            <h3>Home</h3>
            {show &&
                <p>COUCOU CA VA ?</p>
            }

        </div>
  );
};

export default Home