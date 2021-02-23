import React from "react";

const Home = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <h1 className="p-5 text-info">
            Hello {foo} + {bar}
        </h1>
    );
};

export default Home;