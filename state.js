

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
State.prototype.id = this.info.data().id
State.prototype.name = this.info.attr(title)
State.prototype.node = this.info.node
State.prototype.predictionRequest = function() {
	server = ""
    var xhr = new XMLHttpRequest();
    xhr.open('GET', server+'/prediction/'+this.id)
    xhr.onload = ()=>{window.location.replace(window.location.origin+'/')}
    xhr.send();
    
}

