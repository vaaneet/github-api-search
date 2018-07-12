const github= new Github;
const ui= new UI;

const search =  document.getElementById('searchUser');

search.addEventListener('keyup', (e) => {
    const input = e.target.value;

    if(input !== ''){
        github.getuser(input)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.alert('User Not Found', 'alert alert-danger'); 
            }else{
                ui.showprofile(data.profile);
            }
        })
    }else{
        ui.clearout();
    }
});