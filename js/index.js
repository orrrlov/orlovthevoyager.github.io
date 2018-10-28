var app = new Vue({ 
    el: '#app',
    methods: {
        submit: function (event) {
            var input = event.target.value;
            var node = document.createElement("SPAN");
            node.className = "command";        
            var textnode = document.createTextNode(input);
            node.appendChild(textnode);
            document.getElementById("test").appendChild(node);
            document.getElementById('input').value = '';
            
            var message = command(input);

            var node = document.createElement("SPAN");
            node.className = "output";        
            var textnode = document.createTextNode(message);
            node.appendChild(textnode);
            document.getElementById("test").appendChild(node);
        }
    }
});

function command(input) {
    var message;
    switch (input) {
        case 'contact':
            message = "Contact";
            return message;
            break;
        case 'references':
            message = "References";
            return message;
            break;
        case 'cv':
            message = "CV";
            return message;
            break;
        case 'about':
            message = "About";
            return message;
            break;
        case 'projects':
            message = "Projects";
            return message;
            break;
        case 'clear':
            return clear();        
            break;
        case '':
            return '';
            break;
        default:
            message = "Command Not Found";
            return message;
            break;
    }
}

function clear() {
    return document.getElementsByClassName('output').inerHTML = "";
}