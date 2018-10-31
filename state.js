

function State(info, result=null) {
    this.info = info
}
State.prototype.color = function() {
	if(this.result == 0){
    	return 'blue'
	} else if (this.result == 1){
		return 'red'
    } else {
    	return 'purple'
    }

}
State.prototype.id = info.data().id
State.prototype.name = info.attr(title)
State.prototype.node = info.node
State.prototype.predictionRequest = function() {}

