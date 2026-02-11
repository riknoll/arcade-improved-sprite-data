const fs = require("fs");
const path = require("path");

const targetType = "Sprite | tiles.Location | BlockObject"

const typeData = {
    "string": {
        "type": "string",
        "shadow": "text",
    },
    "number": {
        "type": "number",
        "shadow": "math_number",
    },
    "boolean": {
        "type": "boolean",
        "shadow": "logic_boolean",
    },
    "Location": {
        "type": "tiles.Location",
        "shadow": "mapgettile",
    },
    "Image": {
        "type": "Image",
        "shadow": "screen_image_picker"
    },
    "Sprite": {
        "type": "Sprite",
        "shadow": "variables_get",
        "defl": "mySprite",
    }
}

let tsFile = "namespace spriteData {\n\n";
for (const typeName of Object.keys(typeData)) {
    genCode(typeName);
}
tsFile += "}\n";

fs.writeFileSync(path.join(__dirname, "..", "spriteData.ts"), tsFile);

function genCode(typeName) {
    const data = typeData[typeName];

    const lowerType = typeName.toLowerCase();
    const upperType = typeName.charAt(0).toUpperCase() + typeName.slice(1);

    const keyBlockId = `improved_sprite_data_key_${lowerType}`;

    attr("blockId", `improved_sprite_data_set_${lowerType}`);
    attr("block", `set $target data $key to ${lowerType} $value`);
    attr("target.shadow", "variables_get");
    attr("target.defl", "mySprite");
    attr("key.shadow", keyBlockId);

    if (data.shadow) {
        attr("value.shadow", data.shadow);
    }
    if (data.defl) {
        attr("value.defl", data.defl);
    }

    attr("weight", "100");
    attr("group", upperType);
    attr("blockGap", "8");

    tsFile += `    export function set${upperType}(target: ${targetType}, key: string, value: ${data.type}) {\n`;
    tsFile += `        setCore(target, key, value, "${data.type}");\n`;
    tsFile += `    }\n\n`;

    if (typeName === "number") {
        attr("blockId", `improved_sprite_data_change_${lowerType}`);
        attr("block", `change $target data $key by ${lowerType} $value`);
        attr("target.shadow", "variables_get");
        attr("target.defl", "mySprite");
        attr("key.shadow", keyBlockId);
        attr("weight", "95");
        attr("group", upperType);
        attr("blockGap", "8");

        tsFile += `    export function change${upperType}(target: ${targetType}, key: string, value: ${data.type}) {\n`;
        tsFile += `        const current = getCore(target, key, "${data.type}");\n`;
        tsFile += `        if (typeof current === "number") {\n`;
        tsFile += `            setCore(target, key, current + value, "${data.type}");\n`;
        tsFile += `        }\n`;
        tsFile += `    }\n\n`;
    }

    attr("blockId", `improved_sprite_data_get_${lowerType}`);
    attr("block", `$target data $key as ${lowerType}`);
    attr("target.shadow", "variables_get");
    attr("target.defl", "mySprite");
    attr("key.shadow", keyBlockId);
    attr("weight", "90");
    attr("group", upperType);

    tsFile += `    export function get${upperType}(target: ${targetType}, key: string): ${data.type} {\n`;
    tsFile += `        return getCore(target, key, "${data.type}");\n`;
    tsFile += `    }\n\n`;

    attr("shim", "TD_ID")
    attr("blockId", keyBlockId);
    attr("block", `$key`);
    attr("key.fieldEditor", "autocomplete");
    attr("key.fieldOptions.decompileLiterals", "true");
    attr("key.fieldOptions.key", keyBlockId)

    attr("weight", "80");
    attr("group", upperType);
    attr("blockHidden", "true");

    tsFile += `    export function _key${upperType}(key: string): string {\n`;
    tsFile += `        return key;\n`;
    tsFile += `    }\n\n`;

    // array versions of blocks
    attr("blockId", `improved_sprite_data_set_${lowerType}Array`);
    attr("block", `set $target data $key to ${lowerType} array $value`);
    attr("target.shadow", "variables_get");
    attr("target.defl", "mySprite");
    attr("key.shadow", keyBlockId + "_array");
    attr("value.shadow", "lists_create_with");
    attr("value.defl", data.shadow);

    attr("weight", "50");
    attr("group", upperType);
    attr("blockGap", "8");

    tsFile += `    export function set${upperType}Array(target: ${targetType}, key: string, value: ${data.type}[]) {\n`;
    tsFile += `        setCore(target, key, value, "${data.type}Array");\n`;
    tsFile += `    }\n\n`;

    attr("blockId", `improved_sprite_data_get_${lowerType}Array`);
    attr("block", `$target data $key as ${lowerType} array`);
    attr("target.shadow", "variables_get");
    attr("target.defl", "mySprite");
    attr("key.shadow", keyBlockId + "_array");
    attr("weight", "40");
    attr("group", upperType);

    tsFile += `    export function get${upperType}Array(target: ${targetType}, key: string): ${data.type}[] {\n`;
    tsFile += `        return getCore(target, key, "${data.type}Array");\n`;
    tsFile += `    }\n\n`;

    attr("shim", "TD_ID")
    attr("blockId", keyBlockId + "_array");
    attr("block", `$key`);
    attr("key.fieldEditor", "autocomplete");
    attr("key.fieldOptions.decompileLiterals", "true");
    attr("key.fieldOptions.key", keyBlockId + "_array");

    attr("weight", "30");
    attr("group", upperType);
    attr("blockHidden", "true");

    tsFile += `    export function _key${upperType}Array(key: string): string {\n`;
    tsFile += `        return key;\n`;
    tsFile += `    }\n\n`;

    function attr(name, value) {
        value = "" + value;
        if (value.indexOf(".") >= 0 || value.indexOf(" ") >= 0 || value.indexOf("$") >= 0) {
            value = `"${value}"`;
        }

        tsFile += `    //% ${name}=${value}\n`;
    }
}

