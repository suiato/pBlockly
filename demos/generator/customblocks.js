// block definition
// light switch block -- turn color on or off
Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","R"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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
