namespace spriteData {

    //% blockId=improved_sprite_data_set_string
    //% block="set $target data $key to string $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_string
    //% value.shadow=text
    //% weight=100
    //% group=String
    //% blockGap=8
    export function setString(target: Sprite | tiles.Location | BlockObject, key: string, value: string) {
        setCore(target, key, value, "string");
    }

    //% blockId=improved_sprite_data_get_string
    //% block="$target data $key as string"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_string
    //% weight=90
    //% group=String
    export function getString(target: Sprite | tiles.Location | BlockObject, key: string): string {
        return getCore(target, key, "string");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_string
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_string
    //% weight=80
    //% group=String
    //% blockHidden=true
    export function _keyString(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_stringArray
    //% block="set $target data $key to string array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_string_array
    //% value.shadow=lists_create_with
    //% value.defl=text
    //% weight=50
    //% group=String
    //% blockGap=8
    export function setStringArray(target: Sprite | tiles.Location | BlockObject, key: string, value: string[]) {
        setCore(target, key, value, "stringArray");
    }

    //% blockId=improved_sprite_data_get_stringArray
    //% block="$target data $key as string array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_string_array
    //% weight=40
    //% group=String
    export function getStringArray(target: Sprite | tiles.Location | BlockObject, key: string): string[] {
        return getCore(target, key, "stringArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_string_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_string_array
    //% weight=30
    //% group=String
    //% blockHidden=true
    export function _keyStringArray(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_number
    //% block="set $target data $key to number $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_number
    //% value.shadow=math_number
    //% weight=100
    //% group=Number
    //% blockGap=8
    export function setNumber(target: Sprite | tiles.Location | BlockObject, key: string, value: number) {
        setCore(target, key, value, "number");
    }

    //% blockId=improved_sprite_data_change_number
    //% block="change $target data $key by number $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_number
    //% weight=95
    //% group=Number
    //% blockGap=8
    export function changeNumber(target: Sprite | tiles.Location | BlockObject, key: string, value: number) {
        const current = getCore(target, key, "number");
        if (typeof current === "number") {
            setCore(target, key, current + value, "number");
        }
    }

    //% blockId=improved_sprite_data_get_number
    //% block="$target data $key as number"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_number
    //% weight=90
    //% group=Number
    export function getNumber(target: Sprite | tiles.Location | BlockObject, key: string): number {
        return getCore(target, key, "number");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_number
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_number
    //% weight=80
    //% group=Number
    //% blockHidden=true
    export function _keyNumber(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_numberArray
    //% block="set $target data $key to number array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_number_array
    //% value.shadow=lists_create_with
    //% value.defl=math_number
    //% weight=50
    //% group=Number
    //% blockGap=8
    export function setNumberArray(target: Sprite | tiles.Location | BlockObject, key: string, value: number[]) {
        setCore(target, key, value, "numberArray");
    }

    //% blockId=improved_sprite_data_get_numberArray
    //% block="$target data $key as number array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_number_array
    //% weight=40
    //% group=Number
    export function getNumberArray(target: Sprite | tiles.Location | BlockObject, key: string): number[] {
        return getCore(target, key, "numberArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_number_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_number_array
    //% weight=30
    //% group=Number
    //% blockHidden=true
    export function _keyNumberArray(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_boolean
    //% block="set $target data $key to boolean $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_boolean
    //% value.shadow=logic_boolean
    //% weight=100
    //% group=Boolean
    //% blockGap=8
    export function setBoolean(target: Sprite | tiles.Location | BlockObject, key: string, value: boolean) {
        setCore(target, key, value, "boolean");
    }

    //% blockId=improved_sprite_data_get_boolean
    //% block="$target data $key as boolean"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_boolean
    //% weight=90
    //% group=Boolean
    export function getBoolean(target: Sprite | tiles.Location | BlockObject, key: string): boolean {
        return getCore(target, key, "boolean");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_boolean
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_boolean
    //% weight=80
    //% group=Boolean
    //% blockHidden=true
    export function _keyBoolean(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_booleanArray
    //% block="set $target data $key to boolean array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_boolean_array
    //% value.shadow=lists_create_with
    //% value.defl=logic_boolean
    //% weight=50
    //% group=Boolean
    //% blockGap=8
    export function setBooleanArray(target: Sprite | tiles.Location | BlockObject, key: string, value: boolean[]) {
        setCore(target, key, value, "booleanArray");
    }

    //% blockId=improved_sprite_data_get_booleanArray
    //% block="$target data $key as boolean array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_boolean_array
    //% weight=40
    //% group=Boolean
    export function getBooleanArray(target: Sprite | tiles.Location | BlockObject, key: string): boolean[] {
        return getCore(target, key, "booleanArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_boolean_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_boolean_array
    //% weight=30
    //% group=Boolean
    //% blockHidden=true
    export function _keyBooleanArray(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_location
    //% block="set $target data $key to location $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_location
    //% value.shadow=mapgettile
    //% weight=100
    //% group=Location
    //% blockGap=8
    export function setLocation(target: Sprite | tiles.Location | BlockObject, key: string, value: tiles.Location) {
        setCore(target, key, value, "tiles.Location");
    }

    //% blockId=improved_sprite_data_get_location
    //% block="$target data $key as location"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_location
    //% weight=90
    //% group=Location
    export function getLocation(target: Sprite | tiles.Location | BlockObject, key: string): tiles.Location {
        return getCore(target, key, "tiles.Location");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_location
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_location
    //% weight=80
    //% group=Location
    //% blockHidden=true
    export function _keyLocation(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_locationArray
    //% block="set $target data $key to location array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_location_array
    //% value.shadow=lists_create_with
    //% value.defl=mapgettile
    //% weight=50
    //% group=Location
    //% blockGap=8
    export function setLocationArray(target: Sprite | tiles.Location | BlockObject, key: string, value: tiles.Location[]) {
        setCore(target, key, value, "tiles.LocationArray");
    }

    //% blockId=improved_sprite_data_get_locationArray
    //% block="$target data $key as location array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_location_array
    //% weight=40
    //% group=Location
    export function getLocationArray(target: Sprite | tiles.Location | BlockObject, key: string): tiles.Location[] {
        return getCore(target, key, "tiles.LocationArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_location_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_location_array
    //% weight=30
    //% group=Location
    //% blockHidden=true
    export function _keyLocationArray(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_image
    //% block="set $target data $key to image $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_image
    //% value.shadow=screen_image_picker
    //% weight=100
    //% group=Image
    //% blockGap=8
    export function setImage(target: Sprite | tiles.Location | BlockObject, key: string, value: Image) {
        setCore(target, key, value, "Image");
    }

    //% blockId=improved_sprite_data_get_image
    //% block="$target data $key as image"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_image
    //% weight=90
    //% group=Image
    export function getImage(target: Sprite | tiles.Location | BlockObject, key: string): Image {
        return getCore(target, key, "Image");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_image
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_image
    //% weight=80
    //% group=Image
    //% blockHidden=true
    export function _keyImage(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_imageArray
    //% block="set $target data $key to image array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_image_array
    //% value.shadow=lists_create_with
    //% value.defl=screen_image_picker
    //% weight=50
    //% group=Image
    //% blockGap=8
    export function setImageArray(target: Sprite | tiles.Location | BlockObject, key: string, value: Image[]) {
        setCore(target, key, value, "ImageArray");
    }

    //% blockId=improved_sprite_data_get_imageArray
    //% block="$target data $key as image array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_image_array
    //% weight=40
    //% group=Image
    export function getImageArray(target: Sprite | tiles.Location | BlockObject, key: string): Image[] {
        return getCore(target, key, "ImageArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_image_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_image_array
    //% weight=30
    //% group=Image
    //% blockHidden=true
    export function _keyImageArray(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_sprite
    //% block="set $target data $key to sprite $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_sprite
    //% value.shadow=variables_get
    //% value.defl=mySprite
    //% weight=100
    //% group=Sprite
    //% blockGap=8
    export function setSprite(target: Sprite | tiles.Location | BlockObject, key: string, value: Sprite) {
        setCore(target, key, value, "Sprite");
    }

    //% blockId=improved_sprite_data_get_sprite
    //% block="$target data $key as sprite"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_sprite
    //% weight=90
    //% group=Sprite
    export function getSprite(target: Sprite | tiles.Location | BlockObject, key: string): Sprite {
        return getCore(target, key, "Sprite");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_sprite
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_sprite
    //% weight=80
    //% group=Sprite
    //% blockHidden=true
    export function _keySprite(key: string): string {
        return key;
    }

    //% blockId=improved_sprite_data_set_spriteArray
    //% block="set $target data $key to sprite array $value"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_sprite_array
    //% value.shadow=lists_create_with
    //% value.defl=variables_get
    //% weight=50
    //% group=Sprite
    //% blockGap=8
    export function setSpriteArray(target: Sprite | tiles.Location | BlockObject, key: string, value: Sprite[]) {
        setCore(target, key, value, "SpriteArray");
    }

    //% blockId=improved_sprite_data_get_spriteArray
    //% block="$target data $key as sprite array"
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% key.shadow=improved_sprite_data_key_sprite_array
    //% weight=40
    //% group=Sprite
    export function getSpriteArray(target: Sprite | tiles.Location | BlockObject, key: string): Sprite[] {
        return getCore(target, key, "SpriteArray");
    }

    //% shim=TD_ID
    //% blockId=improved_sprite_data_key_sprite_array
    //% block="$key"
    //% key.fieldEditor=autocomplete
    //% key.fieldOptions.decompileLiterals=true
    //% key.fieldOptions.key=improved_sprite_data_key_sprite_array
    //% weight=30
    //% group=Sprite
    //% blockHidden=true
    export function _keySpriteArray(key: string): string {
        return key;
    }

}
