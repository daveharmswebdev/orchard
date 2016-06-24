// hey

var Plant = function(cm) {
	this.height = cm;
};

Plant.prototype.increaseHeight = function(cm) {
	this.height += cm || 0;
};
Plant.prototype.decreaseHeight = function(cm) {
	this.height -= cm;
};
Plant.prototype.getHeight = function() {
	return `${this.height} cm`;
};

var Tree = function(cm) {
	this.height = cm || this.height;
	this.branches = Math.floor(cm/10);

};
Tree.prototype = new Plant();
Tree.prototype.trim = function(cm) {
	this.decreaseHeight(cm);
};
Tree.prototype.grow = function(cm) {
	this.increaseHeight(cm);
};

