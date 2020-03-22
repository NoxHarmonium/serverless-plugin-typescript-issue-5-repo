// Pull in a third party dependency
// to test transitive dependencies
import { map } from "lodash";

export const testFn = () => {
    // Contrived function
    return map([1, 2, 3, 4], (n) => n * 2);
}