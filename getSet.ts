namespace spriteData {
    export class BlockObject {
        data: any;

        constructor() {
            this.data = {};
        }
    }

    class LocationDataEntry {
        data: any;
        constructor(public column: number, public row: number) {
            this.data = {}
        }
    }

    class TileMapDataEntry {
        entries: LocationDataEntry[];
        constructor(public tilemap: tiles.TileMapData) {
            this.entries = [];
        }

        getEntry(column: number, row: number, createIfMissing = false): any {
            for (const entry of this.entries) {
                if (entry.column === column && entry.row === row) {
                    return entry.data;
                }
            }

            if (createIfMissing) {
                const newEntry = new LocationDataEntry(column, row);
                this.entries.push(newEntry);
                return newEntry.data;
            }

            return undefined;
        }
    }

    class State {
        tilemapEntries: TileMapDataEntry[];

        constructor() {
            this.tilemapEntries = [];
        }

        getTileMapEntry(tilemap: tiles.TileMapData, column: number, row: number, createIfMissing = false): any {
            for (const entry of this.tilemapEntries) {
                if (entry.tilemap === tilemap) {
                    return entry.getEntry(column, row, createIfMissing);
                }
            }

            if (createIfMissing) {
                const newEntry = new TileMapDataEntry(tilemap);
                this.tilemapEntries.push(newEntry);
                return newEntry.getEntry(column, row, true);
            }

            return undefined;
        }
    }

    function _stateFactory() {
        return new State();
    }

    function _state(): State {
        return __util.getState(_stateFactory);
    }

    export function getCore(target: Sprite | tiles.Location | BlockObject, key: string, type: string): any {
        const data = resolveTarget(target);
        if (!data) {
            return undefined;
        }
        const result = data["_" + type + "_" + key];

        if (!result && type === "number") {
            return 0;
        }

        return result;
    }

    export function setCore(target: Sprite | tiles.Location | BlockObject, key: string, value: any, type: string) {
        const data = resolveTarget(target);
        if (!data) {
            return;
        }
        data["_" + type + "_" + key] = value;
    }

    function resolveTarget(target: Sprite | tiles.Location | BlockObject): any {
        if (target instanceof Sprite) {
            return target.data;
        }
        else if (target instanceof tiles.Location) {
            const state = _state();
            return state.getTileMapEntry(target.tileMap.data, target.column, target.row, true);
        }
        else if (target instanceof BlockObject) {
            return target.data;
        }
        else {
            throw "Unsupported target type " + target;
        }
    }
}