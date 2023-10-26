class Component{

    constructor(children = []){
        this.children = children;
    }

    render(){
        
        throw new Error("Child class must implement render() method")
    }

    renderInnerHTML(){

        return this.children.map((child) => child.toString());
    }
}

class Header extends Component{

    constructor(){
        super();
    }

    render(){

        return `<header class="header"><h1>Todo Today</h1><p></p></header>`
    }
}

class TaskList extends Component{

    constructor(children){
        super(children);
    }

    render(){

        return `<ul class="tasks"></ul>`
    }
}


class TaskListItem extends Component{

    constructor(children, priority){
        super(children);
        this.priority = priority;
    }

    render(){

        if(this.priority === true){

            return `<li class="tasks-item tasks-item-priority"></li>`
            
        } else{

            return `<li class="tasks-item"></li>`
        }
    }
}

module.exports = {Header, TaskList, TaskListItem}

