namespace spriteData {
    //% blockId=improved_sprite_data_set_function
    //% block="$target define function $key with $sprite"
    //% target.shadow="variables_get"
    //% target.defl="mySprite"
    //% key.shadow=improved_sprite_data_function_key
    //% draggableParameters="reporter"
    //% handlerStatement=1
    //% group="Sprite Functions"
    //% weight=100
    //% blockGap=8
    export function setFunction(target: Sprite, key: string, value: (target: Sprite) => void) {
        setCore(target, key, value, "function");
    }

    //% blockId=improved_sprite_data_call_function
    //% block="call $target function $key"
    //% target.shadow="variables_get"
    //% target.defl="mySprite"
    //% key.shadow=improved_sprite_data_function_key
    //% group="Sprite Functions"
    //% weight=90
    export function callFunction(target: Sprite, key: string) {
        const func = getCore(target, key, "function") as ((target: Sprite) => void);
        if (func) {
            func(target);
        }
    }

    //% blockId=improved_sprite_data_function_key
    //% block="$key"
    //% shim=TD_ID
    //% group="Sprite Functions"
    //% blockHidden=true
    export function _functionKey(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_block_object
    //% block="empty block object"
    //% group="Block Object"
    export function createBlockObject(): BlockObject {
        return new BlockObject();
    }
}