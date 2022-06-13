/**
 *  This wrapper allows us to expose
 * a similar interface to .read() as mentioned in the React docs 
 * i.e https://17.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
 * 
 * Referencing the §wrapPromise§ flow in the Offical documentation https://codesandbox.io/s/frosty-hermann-bztrp
 */

function promiser(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

export {
    promiser
};