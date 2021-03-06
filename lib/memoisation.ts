import { Hashable, HashTable } from "./hashtable";

export function memoise<T extends Hashable, R>(f: (arg: T) => R): (arg: T) => R {
    const cache = new HashTable<T, R>();

    return function(arg) {
        if(!cache.has(arg)) cache.set(arg, f(arg));

        return cache.get(arg)!;
    };
}
