// function populateList(){
    
//     //Faz uma operação utilizando a classe Array, que possui vários métodos de manipulação de arrays como o método .from() e .map();
//     let data = Array.from({length: 100})
//     .map((_, i) => {return "<div class='item'>Item:" + (i + 1) + "</div>";});

//     //let data = [];
//     // let list = null;

//     // for(let i = 0; i < 100; i++){
//     //     data.push(i + 1);
//     // }

//     let list = document.querySelector('.list');
//     list.innerHTML = data.join(" ");
    
//     return data;

// }

//let data = populateList();

let data = Array.from({length: 100})
.map((_, i) => {return (i + 1);});

//The above part will come from the application.
//The part bellow will be the pagination.

let perPage = 5;

let state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}

let html = {
    get(element){
        return document.querySelector(element);
    }
}

let controls = {
    
    next(){
        
        state.page++
        
        if(state.page > state.totalPage){
            state.page--;
        };
    },
    
    prev(){
        
        state.page--;

        if(state.page < 1){
            state.page++;
        }
    },
    
    goTo(page){
        state.page = page;

        if(state.page > state.totalPage){
            state.page = state.totalPage;
        }
        else if(state.page < 1){
            state.page = 1;
        }
    },

    createListeners(){
        
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1);
            update();
        });

        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage);
            update();
        });

        html.get('.next').addEventListener('click', () => {
            controls.next();
            update();
        });

        html.get('.prev').addEventListener('click', () => {
            controls.prev();
            update();
        });
    }
}

let list = {
    create(item){

        console.log(item);
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;

        html.get('.list').appendChild(div);
    },

    update(){
        // console.log('Intro object list atribute update')
        html.get('.list').innerHTML = "";
        let page = state.page -1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        let paginatedItems = data.slice(start,end);

        paginatedItems.forEach(list.create);
    }
}

let buttons = {
    create(){

    },
    update(){
        html.get('.numbers').innerHTML = "";
    }
}

function update(){
    list.update();
    buttons.update();
}

function init(){
    update();
    controls.createListeners();
}

init();

// console.log("Página Atual: " + state.page);
// controls.goTo(90);
// console.log("Para a página: " + state.page);

