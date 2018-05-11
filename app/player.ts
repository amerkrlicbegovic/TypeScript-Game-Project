 /// <reference path= "pearson.ts" />


class Player implements Pearson {
    name: string;
    age?: number;

    formatName() {
        return this.name.toLocaleUpperCase();
    }
}