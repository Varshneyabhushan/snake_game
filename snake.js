function Snake(speed,limit){
    this.limit = limit
    this.x = 0
    this.y = 0
    this.dx = 1
    this.dy = 0
    this.speed = speed
    this.matter = [[this.x,this.y]]

    this.go = function(callback){
        this.x += this.dx*speed
        this.y += this.dy*speed
        if(this.x < 0) this.x += this.limit 
        if(this.x > this.limit ) this.x -= this.limit 
        if(this.y < 0) this.y += this.limit 
        if(this.y > this.limit ) this.y -= this.limit 
        this.add([this.x,this.y])
        this.cutail()
        this.showup(callback)
    }

    this.down = function(){
        this.dx = 0
        this.dy = 1
    }

    this.up = function(){
        this.dx = 0
        this.dy = -1
    }

    this.left = function(){
        this.dx = -1
        this.dy = 0
    }

    this.right = function(){
        this.dx = 1
        this.dy = 0
    }

    this.add = function(bit){
        this.matter.push(bit)
    }

    this.cutail = function(){
        this.matter = this.matter.slice(1)
    }

    this.checkCollision = function(){
        var x = this.x
        var y = this.y
        if(this.matter.length == 1) return false
        else{
            for(var i=0;i<this.matter.length - 1;i++){
                if(x == this.matter[i][0] && y == this.matter[i][1]) return true
            }
            return false
        }
    }

    this.checkEat = function(foodx,foody){
        if(abs(this.x - foodx) < 1 && abs(this.y - foody) < 1) return true
        else return false
    }

    this.showup = function(callback){
        var links = this.matter
        for(var i=0;i<links.length;i++){
            callback(links[i][0],links[i][1],1,1)
        }
    }
}