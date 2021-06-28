// block definition
// light switch block -- turn color on or off
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
// block for lightswitch
{
  "type": "lightswitch",
  "message0": "Turn %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "lightcolor",
      "options": [
        [
          "red",
          "R"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "switch",
      "options": [
        [
          "on",
          "on"
        ],
        [
          "off",
          "off"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
} ,

{
    "type": "p5_createCanvas",
    "message0": "createCanvas %1 width %2 height %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "width",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "height",
            "check": "Number",
            "align": "RIGHT"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "create a canvas",
    "helpUrl": "https://p5js.org/reference/#/p5/createCanvas"
},

{
  "type": "p5_background",
  "message0": "background %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "https://p5js.org/reference/#/p5/background"
}
])

// generator stub
Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
	if (dropdown_switch==="on") {
		var code = "document.getElementById('circle').style.backgroundColor='red';"
	}
	if (dropdown_switch==="off") {
		var code = "document.getElementById('circle').style.backgroundColor='white';"
	}
  return code;
};

Blockly.JavaScript['p5_createCanvas'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_height = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;

    var code =
        'P5.createCanvas('+ value_width + ',' + value_height + ');\n'; 
        // 'onresize();\n'; // force the layout to go again
    return code;

};

Blockly.JavaScript['p5_background'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.background(' + value_color +  ');\n';
    return code;
};

