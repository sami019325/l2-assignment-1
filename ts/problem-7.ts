{
    //

    const logString = (message: any): void => {
        if (typeof message === "string") {
            console.log(message);
        }
        else {
            throw new Error("Input is not a string");
        }
    }


    // logString("Hello, TypeScript!");

    // logString(42)

    //
}

