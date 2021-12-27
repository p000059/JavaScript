var marcas = [{marca: 'Ford', modelo: 'Focus'},
              {marca: 'BMW', modelo: 'BMW Z4'},
              {marca: 'Fiat', modelo: 'Palio'},
              {marca: 'Audi', modelo: 'A3'}];


function showMarcas(){

    let idTable = document.getElementById('idTable');
    let table = document.createElement('table');

    marcas.forEach(function (elemento) {
        
        let tr = document.createElement('tr')
        console.log("Marca: " + elemento.marca + " Modelo: " + elemento.modelo);
        
        for(let i in elemento){
            let td = document.createElement('td');
            td.innerHTML = elemento[i];
            tr.appendChild(td);    
            
        }

        table.className = "table table-responsive table-striped table-bordered table-hover";
        table.appendChild(tr);
        idTable.appendChild(table);
       
    });
}

