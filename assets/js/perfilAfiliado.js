
const search = () => {
    const search = document.getElementById('search');
    const clientsAll = document.getElementById('citas-clientes');
    const client = document.querySelectorAll('.card-client');
    const clientDate = document.getElementsByClassName('date');

    for(var i = 0; i< clientDate.length;i++){
        let match = client[i].getElementsByClassName('date')[0];

        if(match){
            let textValue = match.textContent || match.innerText;
            
            if(textValue.indexOf(search) != -1){
                client[i].style.display = "";

            }else{
                client[i].style.display = 'none';

            }

        }
    }
}
    