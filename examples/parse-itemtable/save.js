import Parse from 'parse';
import ItemTable from '../../plugins/parse/itemtable/ItemTable.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
        this.txt;
    }

    preload() {}

    create() {
        Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
        Parse.initialize(
            'HSEc6FPwSQxMPzFwBooEme2n0agfUIBgFcO8LNtr', // This is your Application ID
            'DbgfGW40cdqUQug8cv6NDAplB1D9daNIjcYtdGSQ' // This is your Javascript key
        );

        var table = new ItemTable({
            className: 'characters',
            primaryKeys: ['name'],
            lines: 25,
        })

        debugger
        table.save({
            name: 'rex',
            hp: 20,
            mp: 5,
            coin: 20
        });
    }

    update() {}
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);