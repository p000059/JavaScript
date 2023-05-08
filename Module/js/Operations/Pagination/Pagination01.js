function populateList(){
    
    //Faz uma operação utilizando a classe Array, que possui vários métodos de manipulação de arrays como o método .from() e .map();
    // let data = Array.from({length: 100})
    // .map((_,i) => {return (i + 1);});

    let data = [];
    //let list = null;

    for(let i = 0; i < 100; i++){
        data.push(i + 1);
    }

    let list = document.querySelector('.list');
    list.innerHTML = data.join(" ");
    
    return data;

}

let data = populateList();

// let data = Array.from({length: 100})
// .map((_, i) => {return (i + 1);});

//The above part will come from the application.
//The part bellow will be the pagination.

let perPage = 5;

let state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage),
    maxVisibleButtons: 5
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
        
        if(state.page > state.totalPage){
            state.page = state.totalPage;
        }
        
        state.page = +page;
        
        if(state.page < 1){
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

        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;

        html.get('.list').appendChild(div);
    },

    update(){
        
        html.get('.list').innerHTML = "";
        let page = state.page -1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        let paginatedItems = data.slice(start,end);

        paginatedItems.forEach(list.create);
    }
}

let buttons = {
    
    element: html.get('#paginate .numbers'),

    create(number){
        let button = document.createElement('div');

        button.innerHTML = number;

        if(state.page == number){
            button.classList.add('active');

        }

        button.addEventListener('click',(event) => {
            let page = event.target.innerText;
            controls.goTo(page);
            update();
        })
        
        buttons.element.appendChild(button);
    },

    update(){
        
        buttons.element.innerHTML = "";
        let {maxLeft, maxRight} = buttons.calculateMaxVisible();

        for(let page = maxLeft; page <= maxRight; page++){
            buttons.create(page);
        }
        
    },

    calculateMaxVisible(){
        
        let maxVisibleButtons = state.maxVisibleButtons;

        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

        if(maxLeft < 1){
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }

        if(maxRight > state.totalPage){
            maxLeft = state.totalPage - (maxVisibleButtons -1);
            maxRight = state.totalPage
            
            if(maxLeft < 1){
                
                maxLeft = 1
            } 
        }

        return {maxLeft, maxRight};
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


